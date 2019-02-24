var me = document.querySelector(".me");
var about = document.querySelector(".about-title");
var aboutMe = document.querySelector(".about-me");
var skills1 = document.querySelector(".one");
var skills2 = document.querySelector(".two");
var skills3 = document.querySelector(".three");
var skills4 = document.querySelector(".four");
var skills5 = document.querySelector(".five");
var skills6 = document.querySelector(".six");
var skills7 = document.querySelector(".seven");
var slideAnim1 = document.querySelector(".design1");
var slideAnim2 = document.querySelector(".design2");
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
var slidesTwo = document.querySelectorAll('#slides2 .slide2');
var currentSlideTwo = 0;
var slideIntervalTwo = setInterval(nextSlideTwo,5000);


window.addEventListener("scroll", function() {
    if(this.pageYOffset > 130) {
        me.classList.add("animate");
    }
    if(this.pageYOffset > 350) {
        about.classList.add("animate2");
    }
    if(this.pageYOffset > 400) {
        aboutMe.classList.add("animate");
    }
    if(this.pageYOffset > 800) {
        skills1.classList.add("animate-skills");
        skills2.classList.add("animate-skills");
        skills3.classList.add("animate-skills");
        skills4.classList.add("animate-skills");
        skills5.classList.add("animate-skills");
        skills6.classList.add("animate-skills");
        skills7.classList.add("animate-skills");
    }
})

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function nextSlideTwo() {
    slidesTwo[currentSlideTwo].className = 'slide2';
    currentSlideTwo = (currentSlideTwo+1)%slidesTwo.length;
    slidesTwo[currentSlideTwo].className = 'slide2 showing2';
}


function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

