import Carousel from "../components/Carousel";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  // Данные для рекламных статей
  const articles = [
    {
      id: 1,
      title: "Польза сезонных фруктов для иммунитета",
      description: "Узнайте, какие фрукты особенно полезны в холодное время года и как они помогают укрепить иммунную систему.",
      category: "Здоровье",
      date: "15.11.2024",
      image: null, // Можно добавить URL изображения
    },
    {
      id: 2,
      title: "Экзотические фрукты: как правильно выбирать и хранить",
      description: "Руководство по выбору и хранению экзотических фруктов для максимального сохранения вкуса и пользы.",
      category: "Советы",
      date: "10.11.2024",
      image: null,
    },
    {
      id: 3,
      title: "Органические vs обычные фрукты: в чем разница?",
      description: "Сравнительный анализ органических и обычных фруктов. Стоит ли переплачивать за органику?",
      category: "Обзор",
      date: "05.11.2024",
      image: null,
    },
    {
      id: 4,
      title: "Фруктовые смузи на каждый день: рецепты",
      description: "Простые и вкусные рецепты смузи, которые помогут вам получить все необходимые витамины.",
      category: "Рецепты",
      date: "01.11.2024",
      image: null,
    },
    {
      id: 5,
      title: "Как распознать спелые фрукты: секреты выбора",
      description: "Профессиональные советы по выбору идеально спелых фруктов без нитратов и химикатов.",
      category: "Советы",
      date: "28.10.2024",
      image: null,
    },
    {
      id: 6,
      title: "Фруктовые диеты: польза и предостережения",
      description: "Разбираем популярные фруктовые диеты, их преимущества и возможные риски для здоровья.",
      category: "Здоровье",
      date: "25.10.2024",
      image: null,
    },
  ];

  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold md:text-5xl mb-5">
        Добро пожаловать в магазин!
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mb-12">
        <div className="w-full md:w-auto lg:w-fit flex-shrink-0">
          <Carousel />
        </div>

        <div className="card bg-base-300 shadow-sm w-full lg:w-2/3 min-h-full flex flex-col">
          <div className="card-body flex-1">
            <h2 className="card-title text-2xl">
              <span className="text-3xl">🍇</span>
              Насладитесь нашими фруктами!
            </h2>
            <p className="text-lg mb-4">
              Откройте для себя мир сочных и спелых фруктов! Мы предлагаем только отборные плоды, 
              собранные в самый пик сезона. Каждый фрукт в нашем магазине — это гарантия свежести, 
              натурального вкуса и пользы для вашего здоровья.
            </p>
            
            <div className="space-y-3 mb-6">
              <h3 className="font-semibold text-xl text-primary">Почему выбирают нас?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Свежие фрукты с фермерских хозяйств</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Без химических добавок и консервантов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Экологичная упаковка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Быстрая доставка в день заказа</span>
                </li>
              </ul>
            </div>
            
            <p className="text-base italic text-base-content/70 mb-4">
              "Фрукты — это не просто еда, это источник энергии, витаминов и хорошего настроения. 
              Начните свой день с пользой вместе с нашими продуктами!"
            </p>

            <div className="card-actions justify-end mt-auto pt-4">
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
      </div>

      {/* Секция с рекламными статьями */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Полезные статьи о фруктах
            </h2>
            <p className="text-base-content/70">
              Узнайте больше о пользе фруктов и правильном их употреблении
            </p>
          </div>
          <button className="btn btn-outline btn-primary mt-4 md:mt-0">
            Все статьи
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Сетка статей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              category={article.category}
              date={article.date}
            />
          ))}
        </div>

        {/* Баннер под статьями */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Подпишитесь на рассылку
              </h3>
              <p className="text-white/90">
                Получайте свежие статьи, рецепты и специальные предложения
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="input input-bordered w-full sm:w-64 text-base-content"
              />
              <button className="btn btn-accent">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}