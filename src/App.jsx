import { useState } from "react";
import PokemonCard from "./PokemonCard.jsx";
import SearchBar from "./SearchBar.jsx";
import sampleData from "./sampleData.js";

function App() {
  // Part A will replace sampleData with the real fetched list
  // (plus loading/error states). Part B only needs `pokemon` to exist.
  const pokemon = sampleData;

  // ---- Part B state ----
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // ---- Part B filter line ----
  const filtered = pokemon.filter((p) =>
    p.name.includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Pokédex Dashboard</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {filtered.length === 0 ? (
        <p className="empty">No Pokémon found</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <PokemonCard
              key={p.name}
              pokemon={p}
              isSelected={selected?.name === p.name}
              onSelect={setSelected}
            />
          ))}
        </div>
      )}

      {/* Part C's <StatsChart stats={selected?.stats} /> goes here */}
      <p>{selected ? `Selected: ${selected.name}` : "Click a card to see stats"}</p>
    </div>
  );
}

export default App;
