/*const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

menuBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Remove active class from all buttons
    menuBtns.forEach((btn) => {
      btn.classList.remove('active-btn');
    });

    // Add active class to the clicked button
    e.target.classList.add('active-btn');

    // Get the category of the clicked button
    const category = e.target.id;

    // Filter the food items based on the category
    foodItems.forEach((item) => {
      if (item.classList.contains(category)) {
        item.style.display = 'grid';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
*/

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
