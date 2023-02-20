const menuButton = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.navbar-links');

let menuOpen = false;

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    menuButton.classList.add('open');
    menuItems.style.display = 'flex';
    menuOpen = true;
  } else {
    menuButton.classList.remove('open');
    menuItems.style.display = 'none';
    menuOpen = false;
  }
});

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar-links a');

// Loop through all links and attach a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const href = link.getAttribute('href');
    
    const targetSection = document.querySelector(href);
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});
