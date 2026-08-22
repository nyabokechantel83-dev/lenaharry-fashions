import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            Image coming soon
          </div>
        )}
      </div>

      <div className="pt-4">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h3 className="mt-1 font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 font-semibold text-gray-900">
          KSh {Number(product.price).toLocaleString("en-KE")}
        </p>

        {product.stock === 0 && (
          <p className="mt-1 text-sm font-medium text-red-500">
            Out of stock
          </p>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;