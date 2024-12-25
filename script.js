document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });
  
    serviceItems.forEach(item => observer.observe(item));
  });

  //Image Carousel//
  document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const translateX = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${translateX}%)`;
    };

    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 2000); // Slide every 2 second
  });