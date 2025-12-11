import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import fruits from "../config/fruits.json";
import berries from "../config/berries.json";

const allProducts = [...fruits, ...berries];

export default function Catalog() {
  const [filters, setFilters] = useState({
    inStock: false,
    onSale: false,
    priceRange: [0, 1000],
    country: "all",
    season: "all",
  });

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      if (filters.inStock && !p.inStock) return false;
      if (filters.onSale && !p.oldPrice) return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1])
        return false;
      if (filters.country !== "all" && p.country !== filters.country)
        return false;
      if (filters.season !== "all" && p.season !== filters.season) return false;
      return true;
    });
  }, [filters]);

  const countries = ["all", ...new Set(allProducts.map((p) => p.country))];
  const seasons = ["all", ...new Set(allProducts.map((p) => p.season))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
        Каталог фруктов и ягод
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Фильтры */}
        <aside className="lg:w-64">
          <div className="bg-base-200 rounded-box p-6 space-y-6">
            <h3 className="font-bold text-lg">Фильтры</h3>

            <div>
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={filters.inStock}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, inStock: e.target.checked }))
                  }
                />
                <span>Только в наличии</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={filters.onSale}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, onSale: e.target.checked }))
                  }
                />
                <span>Со скидкой</span>
              </label>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Цена: {filters.priceRange[0]} – {filters.priceRange[1]} ₽
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    priceRange: [0, +e.target.value],
                  }))
                }
                className="range range-primary"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Страна</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={filters.country}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, country: e.target.value }))
                }
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c === "all" ? "Все страны" : c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Сезон</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={filters.season}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, season: e.target.value }))
                }
              >
                {seasons.map((s) => (
                  <option key={s} value={s}>
                    {s === "all"
                      ? "Любой сезон"
                      : s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-outline btn-sm w-full"
              onClick={() =>
                setFilters({
                  inStock: false,
                  onSale: false,
                  priceRange: [0, 1000],
                  country: "all",
                  season: "all",
                })
              }
            >
              Сбросить фильтры
            </button>
          </div>
        </aside>

        {/* Товары */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-center text-xl py-12">
                Товары не найдены
              </p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
