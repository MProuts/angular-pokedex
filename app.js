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

  app.controller("ReviewController", function(){
    this.review={};
  });

})();
