export const pokemonIds = [1, 2, 3, 4, 5, 6];

// export const pokemon = {
//   id: 1,
//   name: "Bulbasaur",
// };

interface Pokemon {
  id: number;
  name: string;
}

export const pokemon: Pokemon = {
  id: 1,
  name: "Charizard",
};

console.log(pokemon);
