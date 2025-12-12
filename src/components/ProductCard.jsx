export default function ProductCard({ product }) {
  return (
    <div>
      <figure className="px-4 pt-4">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{product.title}</h2>
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <span>{product.country}</span>
          <span>•</span>
          <span className="capitalize">{product.season}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                {product.price} ₽
              </span>
              {product.oldPrice && (
                <span className="text-lg line-through text-base-content/50">
                  {product.oldPrice} ₽
                </span>
              )}
            </div>
            {/* {!product.inStock && (
              <span className="badge badge-error">Нет в наличии</span>
            )} */}
          </div>

          <div className="card-actions mt-4">
            <button
              className="btn btn-primary btn-block"
              disabled={!product.inStock}
            >
              {product.inStock ? "В корзину" : "Нет в наличии"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
