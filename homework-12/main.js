let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function showPrevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
    nextButton.classList.remove("disabled");
  }
  if (currentSlideIndex === 0) {
    prevButton.classList.add("disabled");
  }
}

function showNextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
    prevButton.classList.remove("disabled");
  }
  if (currentSlideIndex === slides.length - 1) {
    nextButton.classList.add("disabled");
  }
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);
