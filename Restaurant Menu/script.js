//MENU BUTTONS!!!

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

//CART!!!

const cartLogo = document.querySelector('.cart-logo');
const cartPopup = document.querySelector('.cart-popup');

cartLogo.addEventListener('click', () => {
  if (cartPopup.style.display === 'none') {
    cartPopup.style.display = 'block';
  } else {
    cartPopup.style.display = 'none';
  }
});

//ADD BUTTON!!!

const foodName = document.querySelectorAll('.food-name');
const foodPrice = document.querySelectorAll('.food-price');
const btnAdd = document.querySelectorAll('.add-btn');

let total = 0;

btnAdd.forEach((e, index)=>{    //index because food-name is part of NodeList
  e.addEventListener('click', ()=>{
    e.innerText = 'Added';
    const name = foodName[index].textContent;
    const price = parseFloat(foodPrice[index].textContent.slice(1));
    cartPopup.innerHTML += `<div class="cart-single-item">
                              <div class = "item-detail">
                              ${name}: ${foodPrice[index].textContent}
                              <button class="remove-item">Remove</button><br>
                              </div>
                            </div>
                            <span class="item-total"></span>`;
    total += price;
    document.querySelector('.item-total').textContent = `Total: ${total}`;
  
  const removeBtn = document.querySelectorAll('.remove-item');
  removeBtn.forEach(e=>{
    e.addEventListener('click', ()=>{
      document.querySelector('.item-detail').remove();
      
      total -= price;
      document.querySelector('.item-total').textContent = `Total: ${total}`;
    });
  });
  btnAdd.innerText = 'Add to cart';
  });
});

