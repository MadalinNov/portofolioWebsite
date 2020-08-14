/*jshint esversion: 6 */
// GLOBAL VARIABLES
var scrollArrow=document.querySelector('.scrollArrow');
var navLink1 = document.querySelector('.navlink1');
var navLink2 = document.querySelector('.navlink2');
var navLink3 = document.querySelector('.navlink3');
var innerHTML = navLink1.innerHTML;
// EVENT LISTENERS

// NAVIGATION
navLink1.addEventListener('click', function(){
  navLink1.classList.add('active');
  navLink1.innerHTML = 'Home';
  navLink2.classList.remove('active');
  navLink2.innerHTML = innerHTML;
  navLink3.classList.remove('active');
  navLink3.innerHTML=innerHTML;
});
navLink2.addEventListener('click', function(){
  navLink1.classList.remove('active');
  navLink1.innerHTML = innerHTML;
  navLink2.classList.add('active');
  navLink2.innerHTML = 'Projects';
  navLink3.classList.remove('active');
  navLink3.innerHTML=innerHTML;
});
navLink3.addEventListener('click', function(){
  navLink1.classList.remove('active');
  navLink1.innerHTML = innerHTML;
  navLink2.classList.remove('active');
  navLink2.innerHTML = innerHTML;
  navLink3.classList.add('active');
  navLink3.innerHTML='About';
});
scrollArrow.addEventListener('click', function(){
  navLink1.classList.remove('active');
  navLink1.innerHTML = innerHTML;
  navLink2.classList.add('active');
  navLink2.innerHTML = 'Projects';
  navLink3.classList.remove('active');
  navLink3.innerHTML=innerHTML;
});
//SMOOTH SCROLL
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});
//PROJECT Popups
var projects = document.querySelectorAll('.site');
var projectsArr = Array.prototype.slice.call(projects);
projectsArr.forEach(function(project, index){
  project.addEventListener('click', blurToggler);
});
// FUNCTIONS
// PARALLAX EFFECT ON MOUSE MOVE
(function() {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#home");
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
  //PROJECTS BACKGROUND animation
  $(window).scroll(function(){
    var scrollPos = $(this).scrollTop();
    $('.hero-bg').css({
      'background-size' : 100+scrollPos + '%'
    });
  });
})();
//Projects Popups
function blurToggler(){
  var blur = document.querySelector('#projects');
  blur.classList.toggle('blurActive');
}
