// TEMPORARY fake data in the shared-contract shape.
// Part A's fetch will replace this. Delete this file after merging.
const sprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const sampleData = [
  {
    name: "pikachu",
    image: sprite(25),
    types: ["electric"],
    stats: [
      { name: "hp", value: 35 },
      { name: "attack", value: 55 },
      { name: "defense", value: 40 },
      { name: "speed", value: 90 },
    ],
  },
  {
    name: "bulbasaur",
    image: sprite(1),
    types: ["grass", "poison"],
    stats: [
      { name: "hp", value: 45 },
      { name: "attack", value: 49 },
      { name: "defense", value: 49 },
      { name: "speed", value: 45 },
    ],
  },
  {
    name: "charmander",
    image: sprite(4),
    types: ["fire"],
    stats: [
      { name: "hp", value: 39 },
      { name: "attack", value: 52 },
      { name: "defense", value: 43 },
      { name: "speed", value: 65 },
    ],
  },
];

export default sampleData;
