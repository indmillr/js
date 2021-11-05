/* Element.getBoundingClientRect() method returns the size of
an element and its position relative to the viewport. */

/* pageYOffset is a read-only window property that returns
the number of pixels the document has been scrolled vertically. */

/* slice extracts a section of a string without modifying the
original string */

/* offsetTop - A Number, representing the top position of the
element, in pixels. */

// ***** SET THE DATE ***** 
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ***** CLOSE LINKS ***** 
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  }
  else {
    linksContainer.style.height = 0;
  }
});

// ***** FIXED NAVBAR ***** 
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-navbar');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ***** SMOOTH SCROLL ***** 
// Select Links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
// Prevent Default   
    e.preventDefault();
// Navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});