(function(){
  var app = angular.module("pokedex", [ ]);

  app.controller("PokedexController", [ '$http', '$log', function($http, $log){
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

})();
