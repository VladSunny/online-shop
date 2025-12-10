import { homeConfig } from '../config/home';

export default function Carousel({ 
  images = homeConfig.carousel.images,
  imagesWithAlt = homeConfig.carousel.imagesWithAlt 
} = {}) {
  
  // Используем imagesWithAlt если передан, иначе создаём из images
  const carouselImages = imagesWithAlt || images.map((src, index) => ({
    src,
    alt: `Фрукты слайд ${index + 1}`
  }));

  const handlePrevClick = (e, index) => {
    e.preventDefault();
    const prevIndex = index === 0 ? carouselImages.length - 1 : index - 1;
    const slideId = `slide-${prevIndex}`;
    document.getElementById(slideId)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  const handleNextClick = (e, index) => {
    e.preventDefault();
    const nextIndex = index === carouselImages.length - 1 ? 0 : index + 1;
    const slideId = `slide-${nextIndex}`;
    document.getElementById(slideId)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  return (
    <div className="carousel carousel-vertical rounded-box h-96">
      {carouselImages.map((image, index) => {
        const slideId = `slide-${index}`;
        return (
          <div 
            key={slideId}
            id={slideId}
            className="carousel-item h-full relative"
          >
            <img 
              src={typeof image === 'string' ? image : image.src} 
              alt={typeof image === 'string' ? `Слайд ${index + 1}` : image.alt} 
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