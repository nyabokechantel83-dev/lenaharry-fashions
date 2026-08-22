import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useShop } from "../context/ShopContext";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

function Shop() {
  const { products, loading, error } = useShop();

  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    categoryFromUrl || "All"
  );

  const categories = useMemo(() => {
    const values = products
      .map((product) => product.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        product.name?.toLowerCase().includes(searchValue) ||
        product.description?.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [products, category, search]);

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="border-b border-gray-100 bg-gray-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Lenaharry Fashions
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Shop Our Collection
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Browse our collection of clothes and shoes.
            Find your size, choose your favourite style and shop with ease.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Filters */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  category === item
                    ? "bg-pink-600 text-white"
                    : "border border-gray-200 text-gray-600 hover:border-pink-600 hover:text-pink-600"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          {/* Search */}
          <div className="w-full lg:max-w-sm">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

        </div>

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        {error && (
          <div className="mt-10 rounded-2xl bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Products */}
        {!loading && !error && (
          <div className="mt-10">
            <ProductGrid products={filteredProducts} />
          </div>
        )}

      </section>

    </main>
  );
}

export default Shop;