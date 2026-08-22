import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabase";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchOrders() {
    try {
      setLoading(true);
      setError("");

      const { data, error: ordersError } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (ordersError) {
        throw ordersError;
      }

      setOrders(data || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load orders.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  async function updateStatus(id, status) {
    try {
      const { error: updateError } = await supabase
        .from("orders")
        .update({ status })
        .eq("id", id);

      if (updateError) {
        throw updateError;
      }

      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order.id === id
            ? { ...order, status }
            : order
        )
      );
    } catch (err) {
      console.error(err);
      setError("Unable to update order status.");
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

          <div className="mt-6">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
              Administration
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              Customer Orders
            </h1>

            <p className="mt-3 text-gray-500">
              View and manage orders placed by customers.
            </p>

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">

        {loading && (
          <div className="rounded-2xl bg-white p-10 text-center text-gray-500">
            Loading orders...
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && orders.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              No orders yet
            </h2>

            <p className="mt-2 text-gray-500">
              Customer orders will appear here.
            </p>

          </div>
        )}

        {!loading && orders.length > 0 && (
          <div className="space-y-5">

            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >

                <div className="flex flex-col justify-between gap-5 lg:flex-row">

                  {/* Customer */}
                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Order #{order.id}
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-gray-900">
                      {order.full_name || order.customer_name}
                    </h2>

                    <div className="mt-3 space-y-1 text-sm text-gray-500">

                      {order.phone && (
                        <p>
                          Phone: {order.phone}
                        </p>
                      )}

                      {order.email && (
                        <p>
                          Email: {order.email}
                        </p>
                      )}

                      {order.address && (
                        <p>
                          Address: {order.address}
                        </p>
                      )}

                    </div>

                  </div>

                  {/* Status */}
                  <div>

                    <p className="text-sm font-medium text-gray-500">
                      Order Status
                    </p>

                    <select
                      value={order.status || "Pending"}
                      onChange={(event) =>
                        updateStatus(
                          order.id,
                          event.target.value
                        )
                      }
                      className="mt-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-pink-500"
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Processing">
                        Processing
                      </option>

                      <option value="Shipped">
                        Shipped
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>
                    </select>

                  </div>

                </div>

                {/* Order Details */}
                <div className="mt-6 border-t border-gray-100 pt-6">

                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div>

                      <p className="text-sm text-gray-500">
                        Payment Method
                      </p>

                      <p className="mt-1 font-medium text-gray-900">
                        {order.payment_method || "Not specified"}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Total
                      </p>

                      <p className="mt-1 text-xl font-bold text-pink-600">
                        KSh{" "}
                        {Number(order.total || 0).toLocaleString(
                          "en-KE"
                        )}
                      </p>

                    </div>

                  </div>

                  {/* Items */}
                  {Array.isArray(order.items) && (
                    <div className="mt-6">

                      <h3 className="font-semibold text-gray-900">
                        Items
                      </h3>

                      <div className="mt-3 space-y-2">

                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between rounded-lg bg-gray-50 px-4 py-3 text-sm"
                          >
                            <span className="text-gray-700">
                              {item.name}
                              {item.size
                                ? ` — Size ${item.size}`
                                : ""}
                            </span>

                            <span className="font-medium text-gray-900">
                              x{item.quantity}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default AdminOrders;