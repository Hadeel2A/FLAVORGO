document.getElementById('sortSelect').addEventListener('change', function() {
    var sortBy = this.value;
    if (sortBy === 'nameAsc') {
        sortByMealName('asc');
    } else if (sortBy === 'nameDesc') {
        sortByMealName('desc');
    } else if (sortBy === 'price') {
        sortByPrice('asc');
    }
});

function sortByPrice(order) {
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        var mealContainer = category.querySelector('.meal-container');
        var meals = Array.from(mealContainer.children);

        meals.sort(function(a, b) {
            var priceA = parseFloat(a.querySelector('.meal-price').innerText.split('$')[1]);
            var priceB = parseFloat(b.querySelector('.meal-price').innerText.split('$')[1]);
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });

        meals.forEach(function(meal) {
            mealContainer.appendChild(meal);
        });
    });
}

function sortByMealName(order) {
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        var mealContainer = category.querySelector('.meal-container');
        var meals = Array.from(mealContainer.children);

        meals.sort(function(a, b) {
            var nameA = a.querySelector('.meal-name').innerText.toLowerCase();
            var nameB = b.querySelector('.meal-name').innerText.toLowerCase();
            if (order === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });

        meals.forEach(function(meal) {
            mealContainer.appendChild(meal);
        });
    });}


        function increaseQuantity(button) {
var input = button.parentElement.querySelector('.quantity-input');
var value = parseInt(input.value, 10);
input.value = value + 1;
}

function decreaseQuantity(button) {
var input = button.parentElement.querySelector('.quantity-input');
var value = parseInt(input.value, 10);
if (value > 1) {
    input.value = value - 1;
}
}

document.querySelectorAll('.plus').forEach(item => {
item.addEventListener('click', event => {
    increaseQuantity(item);
})
});

document.querySelectorAll('.minus').forEach(item => {
item.addEventListener('click', event => {
    decreaseQuantity(item);
})
});


// Function to add a product to the shopping cart
function addToCart(button) {
    // Find the parent meal element
    var meal = button.parentElement;
    
    // Extract meal details
    var name = meal.querySelector('.meal-name').innerText;
    var price = parseFloat(meal.querySelector('.meal-price').innerText.split('$')[1]);
    var quantity = parseInt(meal.querySelector('.quantity-input').value);
    var image = meal.querySelector('.mealdiv-image img').src;
    
    // Create a product object
    var product = {
        name: name,
        price: price,
        quantity: quantity,
        image: image
    };
    
    // Check if cart exists in localStorage
    var cart = localStorage.getItem('cart');
    if (cart) {
        // If cart exists, parse the JSON and add the new product
        cart = JSON.parse(cart);
        cart.push(product);
    } else {
        // If cart doesn't exist, create a new array with the product
        cart = [product];
    }
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Notify the user that the product has been added to the cart
    alert('Product added to cart!');

    
}



// Attach the addToCart function to all Add to Cart buttons
document.querySelectorAll('.add-to-cart-button').forEach(item => {
    item.addEventListener('click', event => {
        addToCart(item);
    });
});





