// One card = one Pokémon. It does not fetch or store anything;
// everything it shows arrives from the parent (App) as props.
function PokemonCard({ pokemon, isSelected, onSelect }) {
  return (
    <div
      className={isSelected ? "card selected" : "card"}
      onClick={() => onSelect(pokemon)}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>

      <div className="types">
        {pokemon.types.map((type) => (
          <span key={type} className={`badge ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
