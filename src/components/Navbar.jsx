import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="leading-tight">
          <h1 className="text-xl font-bold tracking-wide text-pink-600">
            LENAHARRY
          </h1>

          <span className="text-xs font-medium tracking-[0.3em] text-gray-500">
            FASHIONS
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }
          >
            Admin
          </NavLink>

        </div>

        {/* Customer actions */}
        <div className="flex items-center gap-3">

          <Link
            to="/cart"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-pink-600 hover:text-pink-600"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-pink-600 sm:block"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Sign Up
          </Link>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;