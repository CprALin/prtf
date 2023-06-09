//load page  effect
window.addEventListener("load" , () => {
  setTimeout(() => {
    const loader =  document.querySelector(".loader")

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeAttribute(loader);
    });
  }, 2000); 
});

//hamburger nav
var hmbElement = document.querySelector('.hmb');
var listElement = document.querySelector('.list');

var handleClick = function() {
  hmbElement.classList.toggle('active');
  listElement.classList.toggle('active');
};

hmbElement.addEventListener('click', handleClick);


//smooth scroll for nav 
var navLinks = document.querySelectorAll('#menu .list ul li a');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    }


//current year for footbar
document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  var currentYearElement = document.getElementById('currentYear');
  currentYearElement.textContent = currentYear;
});



//title change 
var pageTitleElement = document.getElementById('pageTitle');
var initialTitle = pageTitleElement.textContent;
    
window.addEventListener('focus', function() {
   pageTitleElement.textContent = initialTitle;
});

window.addEventListener('blur', function() {
   pageTitleElement.textContent = 'Come back ! :(';
});

//show button function
var button = document.getElementById('button');
var mySection = document.getElementById('about');

button.addEventListener('click', function() {
   mySection.scrollIntoView({ behavior: 'smooth' });
});

//scroll active link

var lnkElements = document.querySelectorAll('.lnk');

function checkScrollPosition() {
  var scrollPosition = window.scrollY;

  lnkElements.forEach(function(lnkElement) {
    var targetId = lnkElement.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement.offsetTop <= scrollPosition &&
        targetElement.offsetTop + targetElement.offsetHeight > scrollPosition) {
      lnkElement.classList.add('active');
    } else {
      lnkElement.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkScrollPosition);
window.addEventListener('load', checkScrollPosition);
