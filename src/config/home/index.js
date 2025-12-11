import articles from "./articles.json";
import carousel from "./carousel.json";
import content from "./content.json";

// Простой объект конфигурации
export const homeConfig = {
  // Статьи
  articles: articles.articles,
  articlesSection: {
    title: articles.sectionTitle,
    subtitle: articles.sectionSubtitle,
    allArticlesButton: articles.allArticlesButton,
  },

  // Карусель
  carousel: {
    images: carousel.images,
    // Можно добавить alt текст для каждой картинки
    imagesWithAlt: carousel.images.map((src, index) => ({
      src,
      alt: `Фрукты ${index + 1}`,
    })),
  },

  // Контент
  content: {
    heroTitle: content.hero.title,
    welcomeCard: {
      title: content.welcomeCard.title,
      emoji: content.welcomeCard.emoji,
      description: content.welcomeCard.description,
      whyChooseUs: {
        title: content.welcomeCard.whyChooseUs.title,
        points: content.welcomeCard.whyChooseUs.points,
      },
      quote: content.welcomeCard.quote,
      buttons: content.welcomeCard.buttons,
    },
    newsletter: content.newsletter,
  },
};

// Экспорт по умолчанию
export default homeConfig;
