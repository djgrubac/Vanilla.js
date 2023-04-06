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
const totalItem = document.querySelector('.item-total');

let total = 0;

btnAdd.forEach((e, index)=>{  //index because food-name is part of NodeList
  e.addEventListener('click', ()=>{
    e.innerText = 'Added';
    const name = foodName[index].textContent;
    const price = parseFloat(foodPrice[index].textContent.slice(1));
    cartPopup.innerHTML += `<div class="cart-single-item">
                              ${name}: ${foodPrice[index].textContent}
                              <button class="remove-item">Remove</button>
                            </div>`;
    total += price;
    document.querySelector('.item-total').textContent = `Total: $${total}`;

  //REMOVE BUTTON!!!

    const removeBtn = document.querySelectorAll('.remove-item');
removeBtn.forEach(e => {
  e.addEventListener('click', () => {
    const cartItem = e.closest('.cart-single-item');
    const itemPrice = parseFloat(cartItem.textContent.match(/\$\d+(\.\d{2})?/)[0].slice(1));
    cartItem.remove();
    total -= itemPrice;
    document.querySelector('.item-total').textContent = `Total: $${total}`;
    /*.match(/\$\d+(\.\d{2})?/) searches the text content for a dollar sign followed by one or more digits, and optionally a period and exactly two more digits. This will match a pattern like "$12.34" or "$5".
      [0] selects the first match found.
      .slice(1) removes the dollar sign from the beginning of the matched text. */
  });
});
});
});

  //POPUP MODAL!!!

      const orderBtn = document.querySelector('.order-btn');
      const popupModal = document.querySelector('.popup-modal');
      const closeBtn = document.querySelector('.close-modal');
      const orderItems = document.querySelector('.order-items');
      const overlay = document.querySelector('.overlay');

      orderBtn.addEventListener('click', () => {
        popupModal.style.display = 'block';
        overlay.style.display = 'block';
        cartPopup.style.display = 'none';
       
        });


      closeBtn.addEventListener('click', () => {
        popupModal.style.display = 'none'
        overlay.style.display = 'none';
      });

