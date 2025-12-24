sliderArrow = document.getElementById("sliderArrow");
let points = document.querySelectorAll(".points span");
let currentSlide = 0;
let screenOne = document.querySelector(".slideScreens .slideScreenOne");
let screenTwo = document.querySelector(".slideScreens .slideScreenTwo");
let screenThree = document.querySelector(".slideScreens .slideScreenThree");


window.onload = function () {
  setTimeout(function () {
    document.getElementById("welcomeScreen").style.opacity = 0;
  setTimeout(function () {
    document.getElementById("welcomeScreen").style.display = "none";
    }, 1000);
}, 2000); 
};



sliderArrow.addEventListener("click", () => {
  if (currentSlide === 0) {
    screenOne.style.display = "none";
    screenTwo.style.display = "block";
    screenThree.style.display = "none";
    points[currentSlide].style.backgroundColor = "#ffb6b6";
    currentSlide = 1;
    points[currentSlide].style.backgroundColor = "var(--primaryColor)";
  } else if (currentSlide === 1) {
    screenOne.style.display = "none";
    screenTwo.style.display = "none";
    screenThree.style.display = "block";
    points[currentSlide].style.backgroundColor = "#ffb6b6";
    points[currentSlide].style.backgroundColor = "#ffb6b6";
    currentSlide = 2;
    points[currentSlide].style.backgroundColor = "var(--primaryColor)";
  }
  else{
    window.location.href = "html/loginpage.html";
  }
});



