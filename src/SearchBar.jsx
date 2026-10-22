// A "controlled input": the text box shows whatever is in App's
// `search` state, and every keystroke updates that state.
function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
