import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabase";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const { data, error: productsError } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (productsError) {
        throw productsError;
      }

      setProducts(data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const { error: deleteError } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

      if (deleteError) {
        throw deleteError;
      }

      setProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== id)
      );
    } catch (err) {
      console.error(err);
      setError("Unable to delete product.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b border-gray-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/admin"
            className="text-sm font-medium text-gray-500 hover:text-pink-600"
          >
            Back to Dashboard
          </Link>

          <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
                Administration
              </p>

              <h1 className="mt-3 text-4xl font-bold text-gray-900">
                Products
              </h1>

              <p className="mt-3 text-gray-500">
                Manage your clothes and shoes.
              </p>
            </div>

            <Link
              to="/admin/products/add"
              className="rounded-full bg-pink-600 px-6 py-3 text-center font-semibold text-white hover:bg-pink-700"
            >
              Add Product
            </Link>

          </div>

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        {loading && (
          <div className="rounded-2xl bg-white p-10 text-center text-gray-500">
            Loading products...
          </div>
        )}

        {error && (
          <div className="rounded-2xl bg-red-50 p-5 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              No products yet
            </h2>

            <p className="mt-2 text-gray-500">
              Add your first clothes or shoes product.
            </p>

            <Link
              to="/admin/products/add"
              className="mt-6 inline-block rounded-full bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
            >
              Add Product
            </Link>

          </div>
        )}

        {!loading && products.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px] text-left">

                <thead className="border-b border-gray-100 bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Product
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Category
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Price
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Stock
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">

                  {products.map((product) => (
                    <tr key={product.id}>

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="h-16 w-14 overflow-hidden rounded-lg bg-gray-100">

                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center text-xs text-gray-400">
                                No image
                              </div>
                            )}

                          </div>

                          <div>
                            <p className="font-semibold text-gray-900">
                              {product.name}
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                              ID: {product.id}
                            </p>
                          </div>

                        </div>

                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {product.category}
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-gray-900">
                        KSh{" "}
                        {Number(product.price).toLocaleString("en-KE")}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {product.stock ?? 0}
                      </td>

                      <td className="px-6 py-5">

                        <div className="flex gap-3">

                          <Link
                            to={`/admin/products/edit/${product.id}`}
                            className="text-sm font-medium text-pink-600 hover:text-pink-700"
                          >
                            Edit
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleDelete(product.id)}
                            className="text-sm font-medium text-red-500 hover:text-red-600"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>
        )}

      </section>

    </main>
  );
}

export default AdminProducts;