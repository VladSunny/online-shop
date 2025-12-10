export default function ArticleCard({ title, description, image, category, date }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
      <figure className="px-4 pt-4">
        <div className="w-full h-48 rounded-xl overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-5xl">🍎</span>
            </div>
          )}
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <div className="badge badge-primary badge-outline">{category}</div>
          <span className="text-sm text-base-content/60">{date}</span>
        </div>
        <h3 className="card-title text-lg md:text-xl line-clamp-2">
          {title}
        </h3>
        <p className="text-base-content/70 line-clamp-3">
          {description}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-ghost btn-sm gap-1">
            Читать дальше
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}