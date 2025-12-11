import { useState, useEffect, useRef, useCallback } from "react";
import { homeConfig } from "../config/home";

export default function Carousel({
  images = homeConfig.carousel.images,
  imagesWithAlt = homeConfig.carousel.imagesWithAlt,
  autoScrollInterval = 3000, // Интервал автопрокрутки в миллисекундах
} = {}) {
  // Используем imagesWithAlt если передан, иначе создаём из images
  const carouselImages =
    imagesWithAlt ||
    images.map((src, index) => ({
      src,
      alt: `Фрукты слайд ${index + 1}`,
    }));

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const autoScrollRef = useRef(null);
  const currentIndexRef = useRef(0);
  const carouselRef = useRef(null);
  const observerRef = useRef(null);

  const scrollToSlide = useCallback((index) => {
    const slideId = `slide-${index}`;
    document.getElementById(slideId)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    currentIndexRef.current = index;
  }, []);

  const handlePrevClick = useCallback(
    (e, index) => {
      e.preventDefault();
      const prevIndex = index === 0 ? carouselImages.length - 1 : index - 1;
      scrollToSlide(prevIndex);
    },
    [carouselImages.length, scrollToSlide],
  );

  const handleNextClick = useCallback(
    (e, index) => {
      e.preventDefault();
      const nextIndex = index === carouselImages.length - 1 ? 0 : index + 1;
      scrollToSlide(nextIndex);
    },
    [carouselImages.length, scrollToSlide],
  );

  // Функция для автопрокрутки
  const autoScroll = useCallback(() => {
    if (!isHovered && isVisible) {
      const nextIndex = (currentIndexRef.current + 1) % carouselImages.length;
      scrollToSlide(nextIndex);
    }
  }, [isHovered, isVisible, carouselImages.length, scrollToSlide]);

  // Инициализация Intersection Observer для отслеживания видимости
  useEffect(() => {
    if (!carouselRef.current) return;

    const options = {
      root: null, // относительно viewport
      rootMargin: "0px",
      threshold: 0.1, // срабатывает, когда 10% элемента видно
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);
    observerRef.current.observe(carouselRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Запуск и остановка автопрокрутки
  useEffect(() => {
    // Очищаем существующий интервал
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    // Запускаем новый интервал только если элемент виден
    if (isVisible && autoScrollInterval > 0) {
      autoScrollRef.current = setInterval(autoScroll, autoScrollInterval);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScrollInterval, isHovered, isVisible, autoScroll]);

  // Обработчики событий мыши
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-vertical rounded-box h-96"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {carouselImages.map((image, index) => {
        const slideId = `slide-${index}`;
        return (
          <div
            key={slideId}
            id={slideId}
            className="carousel-item h-full relative"
          >
            <img
              src={typeof image === "string" ? image : image.src}
              alt={typeof image === "string" ? `Слайд ${index + 1}` : image.alt}
              className="w-full h-full object-cover"
            />

            <div className="absolute w-full left-1/2 bottom-4 transform -translate-x-1/2 flex flex-row justify-around">
              <button
                onClick={(e) => handlePrevClick(e, index)}
                className="btn btn-circle btn-soft btn-primary"
              >
                ❮
              </button>
              <button
                onClick={(e) => handleNextClick(e, index)}
                className="btn btn-circle btn-soft btn-primary"
              >
                ❯
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
