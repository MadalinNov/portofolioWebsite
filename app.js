/*jshint esversion: 6 */
var $ = jQuery;
// GLOBAL VARIABLES
var scrollArrow = document.querySelector(".scrollArrow");
var navLink1 = document.querySelector(".navlink1");
var navLink2 = document.querySelector(".navlink2");
var navLink3 = document.querySelector(".navlink3");
var innerHTML = navLink1.innerHTML;
// EVENT LISTENERS

// NAVIGATION
navLink1.addEventListener("click", function () {
  navLink1.classList.add("active");
  navLink1.innerHTML = "Home";
  navLink2.classList.remove("active");
  navLink2.innerHTML = innerHTML;
  navLink3.classList.remove("active");
  navLink3.innerHTML = innerHTML;
});
navLink2.addEventListener("click", function () {
  navLink1.classList.remove("active");
  navLink1.innerHTML = innerHTML;
  navLink2.classList.add("active");
  navLink2.innerHTML = "Projects";
  navLink3.classList.remove("active");
  navLink3.innerHTML = innerHTML;
});
navLink3.addEventListener("click", function () {
  navLink1.classList.remove("active");
  navLink1.innerHTML = innerHTML;
  navLink2.classList.remove("active");
  navLink2.innerHTML = innerHTML;
  navLink3.classList.add("active");
  navLink3.innerHTML = "About";
});
scrollArrow.addEventListener("click", function () {
  navLink1.classList.remove("active");
  navLink1.innerHTML = innerHTML;
  navLink2.classList.add("active");
  navLink2.innerHTML = "Projects";
  navLink3.classList.remove("active");
  navLink3.innerHTML = innerHTML;
});
//SMOOTH SCROLL
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
//PROJECT Popups
var projects = document.querySelectorAll(".site");
var projectsArr = Array.prototype.slice.call(projects);
var popupWrapper = document.querySelector(".popupWrapper");
projectsArr.forEach(function (project, index) {
  project.addEventListener("click", blurToggler);
});
//POPUPS
var popupOne = document.querySelector(".popup-1");
var popupTwo = document.querySelector(".popup-2");
var popupThree = document.querySelector(".popup-3");
var popupFour = document.querySelector(".popup-4");
var popupFive = document.querySelector(".popup-5");
var popupSix = document.querySelector(".popup-6");
$(".site1").on("click", function () {
  popupOne.classList.add("popupActive");
});
$(".site2").on("click", function () {
  popupTwo.classList.add("popupActive");
});
$(".site3").on("click", function () {
  popupThree.classList.add("popupActive");
});
$(".site4").on("click", function () {
  popupFour.classList.add("popupActive");
});
$(".site5").on("click", function () {
  popupFive.classList.add("popupActive");
});
$(".site6").on("click", function () {
  popupSix.classList.add("popupActive");
});
//loader
window.addEventListener("load", function () {
  var loader = document.querySelector("#loading");
  loader.classList.add("loader-finish");
});

// FUNCTIONS

//Projects Popups
function blurToggler() {
  var blur = document.querySelector("#projectsBlur");
  blur.classList.toggle("blurActive");
  blur.style.pointerEvents = "none";
}
var closeBtn = document.querySelectorAll(".btnclose");
var closeBtnArr = Array.prototype.slice.call(closeBtn);
var popupActive = document.querySelectorAll(".popup");
var popupActiveArr = Array.prototype.slice.call(popupActive);
for (var i = 0; i < closeBtnArr.length; i++) {
  var blur = document.querySelector("#projectsBlur");
  var popupActive = document.querySelectorAll(".popup");
  closeBtnArr[i].addEventListener("click", function () {
    blur.classList.toggle("blurActive");
    blur.style.pointerEvents = "all";
    for (var i = 0; i < popupActiveArr.length; i++) {
      popupActive[i].classList.remove("popupActive");
    }
  });
}

// PARALLAX EFFECT ON MOUSE MOVE
(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#home");
  const elem2 = document.querySelector("#about");
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
    elem2.style.backgroundPosition = x;
  }

  //PROJECTS BACKGROUND animation
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    $(".hero-bg").css({
      "background-size": 100 + scrollPos + "%",
    });
  });
})();
function submitForm() {
  // $('form').submit();
  $('input[type="text"],input[type="email"], textarea').val("");
}
