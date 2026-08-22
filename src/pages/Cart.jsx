import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Cart() {
  const {
    cart,
    total,
    updateQuantity,
    removeFromCart,
  } = useShop();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <section className="mx-auto flex min-h-[600px] max-w-4xl flex-col items-center justify-center px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Your Cart
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-4 max-w-md text-gray-500">
            You haven't added any clothes or shoes yet.
            Browse our collection and find something you love.
          </p>

          <Link
            to="/shop"
            className="mt-8 rounded-full bg-pink-600 px-7 py-3.5 font-semibold text-white transition hover:bg-pink-700"
          >
            Continue Shopping
          </Link>

        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b border-gray-100 bg-white px-6 py-14">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Lenaharry Fashions
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>

        </div>
      </section>

      {/* Cart */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* Products */}
          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-5"
              >

                {/* Image */}
                <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-40 sm:w-32">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-gray-400">
                      No image
                    </div>
                  )}

                </div>

                {/* Information */}
                <div className="flex min-w-0 flex-1 flex-col">

                  <div className="flex justify-between gap-4">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        {item.category}
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-gray-900">
                        {item.name}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id, item.size)
                      }
                      className="text-sm text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>

                  </div>

                  {item.size && (
                    <p className="mt-2 text-sm text-gray-500">
                      Size:{" "}
                      <span className="font-medium text-gray-700">
                        {item.size}
                      </span>
                    </p>
                  )}

                  <p className="mt-2 font-semibold text-gray-900">
                    KSh{" "}
                    {Number(item.price).toLocaleString("en-KE")}
                  </p>

                  {/* Quantity */}
                  <div className="mt-auto pt-4">

                    <div className="flex w-fit items-center rounded-lg border border-gray-200">

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        className="px-4 py-2 text-gray-600 hover:text-pink-600"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        className="px-4 py-2 text-gray-600 hover:text-pink-600"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium text-gray-900">
                  KSh {Number(total).toLocaleString("en-KE")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-medium text-gray-900">
                  Calculated at checkout
                </span>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-xl font-bold text-pink-600">
                    KSh {Number(total).toLocaleString("en-KE")}
                  </span>
                </div>
              </div>

            </div>

            <Link
              to="/checkout"
              className="mt-7 block rounded-full bg-pink-600 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-pink-700"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/shop"
              className="mt-4 block text-center text-sm font-medium text-gray-600 hover:text-pink-600"
            >
              Continue Shopping
            </Link>

          </aside>

        </div>

      </section>

    </main>
  );
}

export default Cart;