const allBtn = document.getElementById('all');
const featuredBtn = document.getElementById('featured');
const todaySpecialBtn = document.getElementById('today-special');
const newArrivalBtn = document.getElementById('new-arrival');

const allItems = document.querySelectorAll('.food-item');

allBtn.addEventListener('click', () => {
  allItems.forEach(item => item.style.display = 'grid');
});

featuredBtn.addEventListener('click', () => {
  allItems.forEach(item => {
    if (item.classList.contains('featured')) {
      item.style.display = 'grid';
    } else {
      item.style.display = 'none';
    }
  });
});

todaySpecialBtn.addEventListener('click', () => {
  allItems.forEach(item => {
    if (item.classList.contains('today-special')) {
      item.style.display = 'grid';
    } else {
      item.style.display = 'none';
    }
  });
});

newArrivalBtn.addEventListener('click', () => {
  allItems.forEach(item => {
    if (item.classList.contains('new-arrival')) {
      item.style.display = 'grid';
    } else {
      item.style.display = 'none';
    }
  });
});

//CART
const btnAdd = document.querySelectorAll('.add-btn');

btnAdd.forEach(e=>{
  e.addEventListener('click', ()=>{
   // document.querySelector('.cart-items').innerHTML = `${[".food-name"]}`
  });

});



