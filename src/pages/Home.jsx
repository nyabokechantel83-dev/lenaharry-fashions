import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 via-white to-rose-50">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-600">
              Lenaharry Fashions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
              Style made for
              <span className="block text-pink-600">
                every occasion.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Discover a carefully selected collection of stylish clothes
              and shoes designed to help you look confident and feel
              comfortable every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-pink-600 px-7 py-3.5 font-semibold text-white transition hover:bg-pink-700"
              >
                Shop Collection
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-pink-600 hover:text-pink-600"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85"
                alt="Fashion collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-6 py-5 shadow-lg sm:-left-8">
              <p className="text-sm text-gray-500">
                Curated fashion
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                Clothes & Shoes
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Find pieces that match your style, from everyday outfits to
            special occasions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* Clothes */}
          <Link
            to="/shop?category=Clothes"
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="aspect-[4/3] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
                alt="Clothes collection"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="text-white">
                <p className="text-sm uppercase tracking-[0.25em]">
                  Collection
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Clothes
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Discover your next favourite outfit.
                </p>
              </div>
            </div>
          </Link>

          {/* Shoes */}
          <Link
            to="/shop?category=Shoes"
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="aspect-[4/3] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"
                alt="Shoes collection"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="text-white">
                <p className="text-sm uppercase tracking-[0.25em]">
                  Collection
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Shoes
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Step into something you'll love.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* About / Brand Section */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
              About Lenaharry
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Fashion that feels personal.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Lenaharry Fashions brings together carefully selected clothes
              and shoes for customers who appreciate quality, comfort and
              beautiful style.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Whether you're dressing for an ordinary day or a special
              occasion, we're here to help you find something that feels
              right for you.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-block font-semibold text-pink-600 hover:text-pink-700"
            >
              Learn more about us →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85"
              alt="Fashion"
              className="h-80 w-full rounded-2xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85"
              alt="Fashion collection"
              className="mt-12 h-80 w-full rounded-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-pink-600">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Find something you'll love.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pink-100">
            Browse our collection of clothes and shoes and discover your
            next favourite piece.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-pink-600 transition hover:bg-gray-100"
          >
            Shop Now
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Home;