export default function Carousel() {
  const images = [
    // { src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
    { src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" },
    { src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" },
    { src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" },
    // { src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" },
    { src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" },
    { src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
  ];

  const handlePrevClick = (e, index) => {
    e.preventDefault();
    const prevIndex = index === 0 ? images.length - 1 : index - 1;
    const slideId = `slide-${prevIndex}`;
    document.getElementById(slideId)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  const handleNextClick = (e, index) => {
    e.preventDefault();
    const nextIndex = index === images.length - 1 ? 0 : index + 1;
    const slideId = `slide-${nextIndex}`;
    document.getElementById(slideId)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  return (
    <div className="carousel carousel-vertical rounded-box h-96">
      {images.map((image, index) => {
        const slideId = `slide-${index}`;
        return (
          <div 
            key={slideId}
            id={slideId}
            className="carousel-item h-full relative"
          >
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            
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