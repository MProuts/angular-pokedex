(function(){
  var app = angular.module("pokedex", [ ]);

  app.controller("PokedexController", function(){
    this.pokemons = pokemons;
  });

  app.controller("ReviewController", function(){
    this.review={};
  });

  var pokemons = [{
    name: 'bulbasaur',
    type: 'Grass',
    weight: 15.2,
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
  },
  {
    name: 'Jigglypuff',
    type: 'Normal',
    weight: 12.2,
    description: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody.",
  }];
})();
