import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-sm">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
          Lenaharry Fashions
        </p>

        <h1 className="mt-5 text-7xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-pink-600 px-7 py-3.5 font-semibold text-white hover:bg-pink-700"
        >
          Back Home
        </Link>

      </div>
    </main>
  );
}

export default NotFound;