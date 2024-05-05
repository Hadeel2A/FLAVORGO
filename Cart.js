document.addEventListener('DOMContentLoaded', function() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var cartContent = document.querySelector('.cart-content');

    if (cart && cart.length > 0) {
        cart.forEach(function(item) {
            var cartItem = document.createElement('div');
            cartItem.classList.add('cart-items');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="Meal Image" class="meal-image">
                <h3 class="mealname">${item.name}</h3>
                <div class="meal-details">
                    <div class="quantity-adjustment">
                        <button class="btn-minus">-</button>
                        <input type="text" class="quantityinput" value="${item.quantity}" readonly>
                        <button class="btn-plus">+</button>
                    </div>
                </div>
                <p class="mealprice">Price: $${item.price}</p>
                <button class="delete-meal-btn">
                    <img class="delete-meal-icon" src="img/delete.png" alt="Delete Meal">
                </button>  
            `;

            cartContent.appendChild(cartItem);
        });
    } else {
        cartContent.innerHTML = '<p>Your cart is empty.</p>';
    }

    calculateTotalPrice();
    attachEventListeners();
});

function calculateTotalPrice() {
    var cartItems = document.querySelectorAll('.cart-items');
    var totalPrice = 0;

    cartItems.forEach(function(item) {
        var price = parseFloat(item.querySelector('.mealprice').textContent.split('$')[1]);
        var quantity = parseInt(item.querySelector('.quantityinput').value);
        totalPrice += price * quantity;
    });

    document.getElementById('Ctotal-price').textContent = totalPrice.toFixed(2) + '$';
}

function attachEventListeners() {
    var btnMinus = document.querySelectorAll('.btn-minus');
    var btnPlus = document.querySelectorAll('.btn-plus');
    var deleteBtns = document.querySelectorAll('.delete-meal-btn');
    var emptyCartBtn = document.querySelector('.empty-cart-button');

    btnMinus.forEach(function(btn) {
        btn.addEventListener('click', function() {
            adjustQuantity(btn, -1);
        });
    });

    btnPlus.forEach(function(btn) {
        btn.addEventListener('click', function() {
            adjustQuantity(btn, 1);
        });
    });

    deleteBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            deleteMeal(btn);
        });
    });

    emptyCartBtn.addEventListener('click', function() {
        emptyCart();
    });
}

function adjustQuantity(button, change) {
    var input = button.parentElement.querySelector('.quantityinput');
    var value = parseInt(input.value, 10);
    var newValue = value + change;

    if (newValue > 0) {
        input.value = newValue;
        calculateTotalPrice();
    }
}

function deleteMeal(button) {
    var item = button.parentElement;
    item.remove();
    calculateTotalPrice();

    
    var cart = JSON.parse(localStorage.getItem('cart'));
    var itemName = item.querySelector('.mealname').textContent;
    var updatedCart = cart.filter(function(item) {
        return item.name !== itemName;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

function emptyCart() {
    
    var cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = '<p>Your cart is empty.</p>';


    localStorage.removeItem('cart');

    // Recalculate total price
    calculateTotalPrice();
}
