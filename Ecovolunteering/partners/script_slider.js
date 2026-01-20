document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "Partners/part_1.png",
    "Partners/part_2.png",
    "Partners/part_3.png",
  ];

  const slider = document.querySelector("[data-slider]");
  const prevBtn = document.querySelector("[data-btn-prev]");
  const nextBtn = document.querySelector("[data-btn-next]");

  if (!slider || !prevBtn || !nextBtn) {
    console.error("Не найдены элементы с data-slider / data-btn-prev / data-btn-next");
    return;
  }

  let currentIndex = 0;
  let slideWidth = 0;

  const setupSlides = () => {
    images.forEach((ImageUrl, index) => {
      const img = document.createElement("img");
      img.classList.add("image");
      img.src = ImageUrl;
      img.dataset.index = index;
      img.alt = `slide ${index + 1}`;
      slider.appendChild(img);
    });

    const firstClone = slider.firstElementChild.cloneNode(true);
    const lastClone = slider.lastElementChild.cloneNode(true);

    firstClone.dataset.index = "first-clone";
    lastClone.dataset.index = "last-clone";

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);
  };

  const updateSlideWidth = () => {
    const first = slider.firstElementChild;
    if (!first) return;
    slideWidth = first.getBoundingClientRect().width;
  };

  const setTransform = () => {
    slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;
  };

  const initSlider = () => {
    updateSlideWidth();
    slider.style.transition = "none";
    setTransform();
    requestAnimationFrame(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
    });
  };

  const moveToSlide = () => setTransform();

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    moveToSlide();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    moveToSlide();
  });

  slider.addEventListener("transitionend", () => {
    const slides = slider.querySelectorAll(".image");
    const currentSlide = slides[currentIndex + 1];
    if (!currentSlide) return;

    if (currentSlide.dataset.index === "first-clone") {
      slider.style.transition = "none";
      currentIndex = 0;
      setTransform();
      requestAnimationFrame(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
      });
    }
    if (currentSlide.dataset.index === "last-clone") {
      slider.style.transition = "none";
      currentIndex = images.length - 1;
      setTransform();
      requestAnimationFrame(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
      });
    }
  });

  window.addEventListener("resize", () => {
    updateSlideWidth();
    slider.style.transition = "none";
    setTransform();
    requestAnimationFrame(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
    });
  });

  setupSlides();
  initSlider();
});
