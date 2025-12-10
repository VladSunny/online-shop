import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center md:text-5xl">Добро пожаловать в магазин!</h1>

      <div className="w-full flex flex-col items-center md:items-start md:flex-row mt-5 gap-5">
        <div className="w-max md:w-full lg:w-fit">
          <Carousel />
        </div>

        <article className="md:w-max lg:w-2/3">
          <div className="card w-full bg-base-200 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-2xl flex items-center gap-2">
                <span className="text-3xl">🍇</span>
                Насладитесь нашими фруктами!
              </h2>
              <p className="text-lg">
                Откройте для себя мир сочных и спелых фруктов! Мы предлагаем только отборные плоды, 
                собранные в самый пик сезона. Каждый фрукт в нашем магазине — это гарантия свежести, 
                натурального вкуса и пользы для вашего здоровья.
              </p>
              <div className="justify-end card-actions mt-4">
                <button className="btn btn-primary gap-2">
                  <span className="text-xl">🛒</span>
                  Выбрать фрукты
                </button>
                <button className="btn btn-outline btn-secondary">
                  Узнать подробнее
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div>
        <div className="card bg-base-200 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}