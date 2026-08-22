import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="flex min-h-[650px] items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl bg-white px-6 py-12 text-center shadow-sm sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Lenaharry Fashions
          </p>

          <h1 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
            Thank You For Your Order
          </h1>

          <p className="mx-auto mt-5 max-w-lg leading-7 text-gray-600">
            Your order has been received. We will contact you using the
            details you provided to confirm your order and delivery.
          </p>

          <div className="mt-8 rounded-2xl bg-pink-50 p-6 text-left">

            <h2 className="font-semibold text-gray-900">
              What happens next?
            </h2>

            <div className="mt-4 space-y-3 text-sm text-gray-600">

              <p>
                Your order details will be reviewed.
              </p>

              <p>
                We will confirm your payment and delivery information.
              </p>

              <p>
                Your order will then be prepared for delivery.
              </p>

            </div>

          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/shop"
              className="rounded-full bg-pink-600 px-7 py-3.5 font-semibold text-white transition hover:bg-pink-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="rounded-full border border-gray-200 px-7 py-3.5 font-semibold text-gray-700 transition hover:border-pink-600 hover:text-pink-600"
            >
              Back Home
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default OrderSuccess;