import Carousel from "../components/Carousel";
import ArticleCard from "../components/ArticleCard";
import { homeConfig } from "../config/home";

export default function Home() {
  const { articles, articlesSection, content } = homeConfig;

  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold md:text-5xl mb-5">
        {content.heroTitle}
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mb-12">
        <div className="w-full md:w-auto lg:w-fit flex-shrink-0">
          <Carousel />
        </div>

        <div className="card bg-base-300 shadow-sm w-full lg:w-2/3 min-h-full flex flex-col">
          <div className="card-body flex-1">
            <h2 className="card-title text-2xl">
              <span className="text-3xl">{content.welcomeCard.emoji}</span>
              {content.welcomeCard.title}
            </h2>
            <p className="text-lg mb-4">{content.welcomeCard.description}</p>

            <div className="space-y-3 mb-6">
              <h3 className="font-semibold text-xl text-primary">
                {content.welcomeCard.whyChooseUs.title}
              </h3>
              <ul className="space-y-2">
                {content.welcomeCard.whyChooseUs.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base italic text-base-content/70 mb-4">
              "{content.welcomeCard.quote}"
            </p>

            <div className="card-actions justify-end mt-auto pt-4">
              <button className="btn btn-primary gap-2">
                {content.welcomeCard.buttons.chooseFruits}
              </button>
              <button className="btn btn-outline btn-secondary">
                {content.welcomeCard.buttons.learnMore}
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
              {articlesSection.title}
            </h2>
            <p className="text-base-content/70">{articlesSection.subtitle}</p>
          </div>
          <button className="btn btn-outline btn-primary mt-4 md:mt-0">
            {articlesSection.allArticlesButton}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
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
                {content.newsletter.title}
              </h3>
              <p className="text-white/90">{content.newsletter.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={content.newsletter.placeholder}
                className="input input-bordered w-full sm:w-64 text-base-content"
              />
              <button className="btn btn-accent">
                {content.newsletter.button}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
