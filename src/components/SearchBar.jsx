function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search products
      </label>

      <input
        id="search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products..."
        className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
      />
    </div>
  );
}

export default SearchBar;