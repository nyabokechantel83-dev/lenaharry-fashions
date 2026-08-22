import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b border-gray-100 bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Lenaharry Fashions
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-gray-500">
            Manage your fashion store from one place.
          </p>

        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Products
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              —
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Total products
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Orders
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              —
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Customer orders
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Clothes
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              —
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Clothing items
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Shoes
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              —
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Shoe products
            </p>
          </div>

        </div>

        {/* Management */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Store Management
          </h2>

          <p className="mt-2 text-gray-500">
            Manage your products and customer orders.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* Products */}
            <Link
              to="/admin/products"
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
                Inventory
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Manage Products
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                Add new clothes and shoes, update existing products,
                change prices and stock, or remove products.
              </p>

              <p className="mt-6 font-semibold text-pink-600">
                Manage Products →
              </p>
            </Link>

            {/* Orders */}
            <Link
              to="/admin/orders"
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
                Sales
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Customer Orders
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                View customer orders, check payment methods and
                update the delivery status.
              </p>

              <p className="mt-6 font-semibold text-pink-600">
                View Orders →
              </p>
            </Link>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-10 rounded-2xl bg-white p-7 shadow-sm">

          <h2 className="text-xl font-bold text-gray-900">
            Quick Actions
          </h2>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">

            <Link
              to="/admin/products/add"
              className="rounded-full bg-pink-600 px-6 py-3 text-center font-semibold text-white hover:bg-pink-700"
            >
              Add New Product
            </Link>

            <Link
              to="/shop"
              className="rounded-full border border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 hover:border-pink-600 hover:text-pink-600"
            >
              View Store
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default AdminDashboard;