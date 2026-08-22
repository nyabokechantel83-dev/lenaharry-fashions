import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "Clothes",
    image: "",
    stock: "",
    sizes: "",
    colors: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const sizes = form.sizes
        .split(",")
        .map((size) => size.trim())
        .filter(Boolean);

      const colors = form.colors
        .split(",")
        .map((color) => color.trim())
        .filter(Boolean);

      const { error: insertError } = await supabase
        .from("products")
        .insert([
          {
            name: form.name,
            description: form.description,
            price: Number(form.price),
            category: form.category,
            image: form.image,
            stock: Number(form.stock),
            sizes,
            colors,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      setError("Unable to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="border-b border-gray-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <Link
            to="/admin/products"
            className="text-sm font-medium text-gray-500 hover:text-pink-600"
          >
            Back to Products
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Administration
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Add Product
          </h1>

          <p className="mt-3 text-gray-500">
            Add a new clothing or shoe product to your collection.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
        >

          <div className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Example: Floral Summer Dress"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the product..."
                rows="4"
                className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                required
              />
            </div>

            {/* Price and Stock */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Price (KSh)
                </label>

                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="2500"
                  min="0"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="10"
                  min="0"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                  required
                />
              </div>

            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
              >
                <option value="Clothes">Clothes</option>
                <option value="Shoes">Shoes</option>
              </select>
            </div>

            {/* Image */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Product Image URL
              </label>

              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/product.jpg"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />

              <p className="mt-2 text-xs text-gray-500">
                We can connect Supabase Storage later so your aunt can
                upload images directly instead of using a URL.
              </p>
            </div>

            {/* Sizes */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Sizes
              </label>

              <input
                type="text"
                name="sizes"
                value={form.sizes}
                onChange={handleChange}
                placeholder="S, M, L, XL"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />

              <p className="mt-2 text-xs text-gray-500">
                Separate sizes with commas.
              </p>
            </div>

            {/* Colors */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Colors
              </label>

              <input
                type="text"
                name="colors"
                value={form.colors}
                onChange={handleChange}
                placeholder="Black, White, Pink"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />

              <p className="mt-2 text-xs text-gray-500">
                Separate colors with commas.
              </p>
            </div>

          </div>

          {error && (
            <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-full bg-pink-600 px-6 py-3.5 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {loading ? "Adding Product..." : "Add Product"}
            </button>

            <Link
              to="/admin/products"
              className="rounded-full border border-gray-200 px-6 py-3.5 text-center font-semibold text-gray-700 hover:border-pink-600 hover:text-pink-600"
            >
              Cancel
            </Link>

          </div>

        </form>

      </section>

    </main>
  );
}

export default AddProduct;