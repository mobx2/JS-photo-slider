// Get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get number of slides
var slidesCount = sliderImages.length;

// Set current slide index
var currentIndex = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Previous and next button
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle click on nextButton , prevButton
nextButton.onclick = nextSlide;
prevButton.onclick = privSlide;

// slider container var
var sliderContainer = document.querySelector(".slider-container");

// Create slide number
var sliderNumber = document.createElement("div");
sliderNumber.classList.add("slide-number");
sliderNumber.innerHTML = `Slide ${currentIndex} From ${slidesCount}`;

// Append slide number to slider container
sliderContainer.prepend(sliderNumber);

// Create indicators ul
var indicatorsUl = document.createElement("ul");

// Create indicators li
for (let i = 1; i <= slidesCount; i++) {
  var indicatorsLi = document.createElement("li");

  indicatorsLi.innerHTML = i;
  indicatorsLi.setAttribute(`data-index`, i);
  indicatorsUl.appendChild(indicatorsLi);
  document.body.appendChild(indicatorsUl);
}

// Get indicators and append ul into it
var indecatior = document.getElementById("indecatior");
indecatior.appendChild(indicatorsUl);

// Next slide function
function nextSlide() {
  if (currentIndex > slidesCount) {
    return false;
  } else {
    sliderImages.forEach((img) => {
      img.classList.remove("active");
    });
    currentIndex++;
    sliderImages[currentIndex - 1].classList.add("active");
  }
}

// Previous slide function
function privSlide() {
  if (currentIndex + 1 < 1) {
    return false;
  } else {
    sliderImages.forEach((img) => {
      img.classList.remove("active");
    });
    currentIndex--;
    sliderImages[currentIndex - 1].classList.add("active");
  }
}

// Create the checker function
function theChecker() {
  // Set the slide number

  slideNumberElement.textContent = `Slide #${currentIndex} of ${slidesCount}`;

  // set active class to current li

  indicatorsUl.children[currentIndex - 1].classList.add("active");
}

theChecker();
