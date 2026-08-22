import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Checkout() {
  const { cart, total, clearCart } = useShop();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (
      !form.fullName ||
      !form.phone ||
      !form.address ||
      !form.city
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    /*
      Payment integration will be connected later.
      For now, we move the customer to the order confirmation page.
    */

    clearCart();
    navigate("/order-success");
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto flex min-h-[600px] max-w-3xl flex-col items-center justify-center px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Checkout
          </p>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some clothes or shoes before checking out.
          </p>

          <Link
            to="/shop"
            className="mt-7 rounded-full bg-pink-600 px-7 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Browse Collection
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
            Checkout
          </h1>

          <p className="mt-3 text-gray-500">
            Complete your details to place your order.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <form onSubmit={handleSubmit}>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* Customer Details */}
            <div className="space-y-8">

              <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">

                <h2 className="text-xl font-bold text-gray-900">
                  Customer Information
                </h2>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07XXXXXXXX"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>

                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter delivery address"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
                      required
                    />
                  </div>

                </div>

              </section>

              {/* Payment */}
              <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">

                <h2 className="text-xl font-bold text-gray-900">
                  Payment Method
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Choose how you would like to pay for your order.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  {/* M-Pesa */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mpesa")}
                    className={`rounded-xl border p-5 text-left transition ${
                      paymentMethod === "mpesa"
                        ? "border-pink-600 bg-pink-50"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <p className="font-semibold text-gray-900">
                      M-Pesa
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Pay using your M-Pesa mobile number.
                    </p>
                  </button>

                  {/* Bank */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`rounded-xl border p-5 text-left transition ${
                      paymentMethod === "bank"
                        ? "border-pink-600 bg-pink-50"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <p className="font-semibold text-gray-900">
                      Bank Transfer
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Pay directly using a bank transfer.
                    </p>
                  </button>

                </div>

                {/* M-Pesa Details */}
                {paymentMethod === "mpesa" && (
                  <div className="mt-6 rounded-xl bg-gray-50 p-5">

                    <label className="text-sm font-medium text-gray-700">
                      M-Pesa Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="07XXXXXXXX"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
                    />

                    <p className="mt-3 text-sm text-gray-500">
                      M-Pesa payment integration will be connected here.
                    </p>

                  </div>
                )}

                {/* Bank Details */}
                {paymentMethod === "bank" && (
                  <div className="mt-6 rounded-xl bg-gray-50 p-5">

                    <p className="font-semibold text-gray-900">
                      Bank Transfer
                    </p>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Bank payment instructions will be displayed here
                      once the business bank details are configured.
                    </p>

                  </div>
                )}

              </section>

              {error && (
                <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6">

              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-5">

                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex justify-between gap-4"
                  >

                    <div>
                      <p className="font-medium text-gray-900">
                        {item.name}
                      </p>

                      {item.size && (
                        <p className="mt-1 text-sm text-gray-500">
                          Size: {item.size}
                        </p>
                      )}

                      <p className="mt-1 text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium text-gray-900">
                      KSh{" "}
                      {(
                        Number(item.price) * item.quantity
                      ).toLocaleString("en-KE")}
                    </p>

                  </div>
                ))}

              </div>

              <div className="mt-6 border-t border-gray-100 pt-5">

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-xl font-bold text-pink-600">
                    KSh {Number(total).toLocaleString("en-KE")}
                  </span>
                </div>

              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-pink-600 px-6 py-4 font-semibold text-white transition hover:bg-pink-700"
              >
                Place Order
              </button>

              <Link
                to="/cart"
                className="mt-4 block text-center text-sm text-gray-500 hover:text-pink-600"
              >
                Back to Cart
              </Link>

            </aside>

          </div>

        </form>

      </section>

    </main>
  );
}

export default Checkout;