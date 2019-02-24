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
    if(this.pageYOffset > 1780){
        slideAnim1.classList.add("slide-animate");
    }
    if(this.pageYOffset > 2260){
        slideAnim2.classList.add("slide-animate2");
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


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
