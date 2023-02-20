/*prvo pravimo funkciju za MENU dugme 
kad stisnemo MENU da se pojavi opadajuci meni i da pise CLOSE umesto MENU
zatim kad stisnemo CLOSE da se povuce opadajuci meni i da pise ponovo menu*/

const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');
    if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    }else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

/* pravimo slajder pomocu biblioteke */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* pravimo filter */

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfoliItems = document.querySelectorAll('.portfolio-single-item');

    portfoliItems.forEach((item) => {
        item.style.display = 'none';
    });
    if(category === 'sve'){
        portfoliItems.forEach((item) => {
            item.style.display = 'block';
        });
    }
    portfoliItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){ 
            item.style.display = 'block';                                                       
        }
    });/* mora includes jer se kategorije podudaraju(hoteli i restorani)
    da li data category iz portfolio item sadrzi category koji smo kliknuli gore */
}

const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    modalWindow.style.display = 'none';
    
}
