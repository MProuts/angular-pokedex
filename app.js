(function(){
  var app = angular.module("pokedex", [ ]);

  app.controller("PokemonController", [ '$http', '$log', function($http, $log){
    var pokedex = this;
    pokedex.pokemons = [];

    $http.get('/pokemons.json').success(function(data){
      pokedex.pokemons = data["pokemons"];
    });

    $log.log(pokedex);
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

  app.controller("CommentController", function(){
    this.comment = {
      body: "something",
      email: "someone@somewhere.com"
    };
  });

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
