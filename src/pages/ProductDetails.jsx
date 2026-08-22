import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function ProductDetails() {
  const { id } = useParams();
  const { products, loading, addToCart } = useShop();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Product not found
        </h1>

        <p className="mt-2 text-gray-500">
          The product you're looking for doesn't exist.
        </p>

        <Link
          to="/shop"
          className="mt-6 rounded-full bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  const sizes = product.sizes || [];

  function handleAddToCart() {
    if (sizes.length > 0 && !selectedSize) {
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      quantity,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-white">

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link
            to="/shop"
            className="hover:text-pink-600"
          >
            Shop
          </Link>

          <span className="mx-2">/</span>

          <span>{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full max-h-[700px] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[3/4] items-center justify-center text-gray-400">
                Image coming soon
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold text-gray-900">
              KSh {Number(product.price).toLocaleString("en-KE")}
            </p>

            {product.description && (
              <p className="mt-6 leading-7 text-gray-600">
                {product.description}
              </p>
            )}

            {/* Sizes */}
            {sizes.length > 0 && (
              <div className="mt-8">

                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900">
                    Select Size
                  </h2>

                  {selectedSize && (
                    <span className="text-sm text-pink-600">
                      Selected: {selectedSize}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-14 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                        selectedSize === size
                          ? "border-pink-600 bg-pink-600 text-white"
                          : "border-gray-200 text-gray-700 hover:border-pink-600"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

              </div>
            )}

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mt-8">
                <h2 className="font-semibold text-gray-900">
                  Available Colors
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">

              <h2 className="font-semibold text-gray-900">
                Quantity
              </h2>

              <div className="mt-3 flex w-fit items-center rounded-lg border border-gray-200">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="px-4 py-3 text-gray-600 hover:text-pink-600"
                >
                  −
                </button>

                <span className="px-5 font-medium">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="px-4 py-3 text-gray-600 hover:text-pink-600"
                >
                  +
                </button>

              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="mt-8 w-full rounded-full bg-pink-600 px-6 py-4 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {product.stock === 0
                ? "Out of Stock"
                : added
                ? "Added to Cart"
                : "Add to Cart"}
            </button>

            {sizes.length > 0 && !selectedSize && (
              <p className="mt-3 text-center text-sm text-gray-500">
                Please select a size before adding to cart.
              </p>
            )}

          </div>
        </div>
      </section>

    </main>
  );
}

export default ProductDetails;