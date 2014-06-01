(function(){
  var app = angular.module("pokedex", [ ]);

  app.controller("PokemonController", [ '$scope', '$http', '$log', function($scope, $http, $log){
    var pokedex = this;
    pokedex.pokemons = [];
    $http
      .get('http://localhost:3000/pokemon.json')
      .success(function(data){
        pokedex.pokemons = data;
    });
} ]);

  app.controller("TabsController", function(){
    this.tab = 1;

    this.setTab = function(n){
      this.tab = n;
    };

    this.isSelected = function(n){
      return this.tab === n;
    };
  });

  app.controller("CommentController", [ '$scope', '$http', '$log', function($scope, $http, $log){
    this.comment = {};
    var that = this;

    this.addComment = function(pokemon){
      var mydata = { comment: this.comment };
      var myurl = 'http://localhost:3000/pokemon/' + pokemon.id + '/comments';
      $log.log(mydata);
      $log.log(myurl);
      $.ajax({
        type: "post",
        url: myurl,
        data: mydata,
        dataType: "json",
        success: function(data){
          //assign primary key
          mydata.comment.id = data.id;

          pokemon.comments.push(mydata.comment);

          //refresh the DOM
          $scope.$apply();
        }
      });
      this.comment = {};
    }

    this.deleteComment = function(pokemon, comment){
      var myurl = 'http://localhost:3000/pokemon/' + pokemon.id + '/comments/' + comment.id
      $log.log(myurl);
      $.ajax({
        url: myurl,
        dataType: "json",
        type: "DELETE",
        contentType: "application/json",
      });
      comment.deleted = true;
    }
  }]);

  app.directive("nameAndImage", function(){
    return {
      restrict: "E",
      templateUrl: "templates/name-and-image.html"
    }
  });

  app.directive("navigation", function(){
    return {
      restrict: "E",
      templateUrl: "templates/navigation-tab.html"
    }
  });

  app.directive("statsTab", function(){
    return {
      restrict: "E",
      templateUrl: "templates/stats-tab.html"
    }
  });

  app.directive("descriptionTab", function(){
    return {
      restrict: "E",
      templateUrl: "templates/description-tab.html"
    }
  });

  app.directive("commentsTab", function(){
    return {
      restrict: "E",
      templateUrl: "templates/comments-tab.html"
    }
  });

})();
