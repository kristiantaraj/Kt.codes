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



window.addEventListener("scroll", function() {
    if(this.pageYOffset > 150) {
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