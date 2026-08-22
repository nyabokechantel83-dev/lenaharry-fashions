function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-8">

        <div>
          <h2 className="text-xl font-bold text-pink-400">
            LENAHARRY
          </h2>

          <p className="mt-1 text-xs tracking-[0.3em] text-gray-400">
            FASHIONS
          </p>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
            Quality fashion for every occasion. Discover clothes and
            shoes selected to help you look and feel your best.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
            <a href="/" className="hover:text-pink-400">
              Home
            </a>

            <a href="/shop" className="hover:text-pink-400">
              Shop
            </a>

            <a href="/about" className="hover:text-pink-400">
              About
            </a>

            <a href="/contact" className="hover:text-pink-400">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">
            Contact Us
          </h3>

          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p>Phone: +254 XXX XXX XXX</p>
            <p>Email: info@lenaharryfashions.com</p>
            <p>Kenya</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 px-6 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lenaharry Fashions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;