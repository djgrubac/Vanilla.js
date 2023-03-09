const menuBtns = document.querySelectorAll('.menu-btn');
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
