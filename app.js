(function(){
  var app = angular.module("pokedex", [ ]);

  app.controller("PokemonController", [ '$http', '$log', function($http, $log){
    var pokedex = this;
    pokedex.pokemons = [];

    $http.get('http://localhost:3000/pokemon.json').success(function(data){
      $log.log(data);
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

  app.controller("CommentController", [ '$http', '$log', function($http, $log){
    this.comment = {};
    this.addComment = function(pokemon){
      pokemon.comments.push(this.comment);
      var mydata = { comment: this.comment };
      var myurl = 'http://localhost:3000/pokemon/' + pokemon.id + '/comments';
      $log.log(mydata);
      $log.log(myurl);
      $.post(myurl, mydata, 'jsonp')
      this.comment = {};
    }

    this.deleteComment = function(pokemon, comment){
      var myurl = 'http://localhost:3000/pokemon/' + pokemon.id + '/comments/' + comment.id
      $log.log(myurl);
      //$.ajax({
      //  url: myurl,
      //  type: 'post',
      //  dataType: 'jsonp',
      //  data: {"_method":"delete"}
      //});
     $.ajax({
       url: myurl,
       dataType: "jsonp",
       type: "POST",
       processData: false,
       contentType: "application/json",
       beforeSend: function(xhr) {
         xhr.setRequestHeader("X-Http-Method-Override", "DELETE");
       }
     });
    }
  } ]);

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
