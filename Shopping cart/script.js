let allTotal = 0;

function addToCart(element){
    let mainElement = element.closest('.single-item');
    let price = mainElement.querySelector('.price').innerText;
    let name = mainElement.querySelector('h3').innerText;
    let quantity = mainElement.querySelector('input').value;

    let cartItems = document.querySelector('.cart-items');

    if (parseInt(quantity) > 0) { //parseIntzato sto je quantity 'string'
        price = price.substring(1); //brisemo do prvog karaktera, brisemo '$'
        price = parseInt(price);

        let total = price * parseInt(quantity);
        allTotal += total;
        cartItems.innerHTML += `<div class = "cart-single-item">
                                <h3>${name}:</h3>
                                <p>${price} * ${quantity} = $<span>${total}</span></p> 
                                <button onclick = "removeItem(this)" class = "remove-item">Remove</button>
                                </div>`; //moramo da stavimo span oko total da bi lakse mogli da manipulisemo kad oduzimamo cene
        document.querySelector('.total').innerText = `Total: $${allTotal}`;

        element.innerHTML = 'Added' //menja add u added
        element.setAttribute('disabled', 'true')
    } else {
        alert('Add quantity');
    }
    
}

function removeItem(element){
    let mainElement = element.closest('.cart-single-item');
    let price = mainElement.querySelector('p span').innerText;
    price = parseInt(price);
    allTotal -= price;
    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainElement.remove();
}