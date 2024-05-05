document.addEventListener('DOMContentLoaded', function() {
    // استدعاء بيانات الوجبات من local storage
    let meals = JSON.parse(localStorage.getItem('meals')) || [];

    // عنصر الوجبات
    const mealContainer = document.querySelector('.mealcontainer');

    // عرض الوجبات على الصفحة
    function displayMeals() {
        mealContainer.innerHTML = ''; // مسح المحتوى السابق

        meals.forEach(function(meal, index) {
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('mea');

            const mealImageDiv = document.createElement('div');
            mealImageDiv.classList.add('mealdivimage');
            const mealImage = document.createElement('img');
            mealImage.src = `img/${meal.photo}`;
            mealImage.alt = `Meal Image ${index + 1}`;
            mealImageDiv.appendChild(mealImage);
            mealDiv.appendChild(mealImageDiv);

            const mealName = document.createElement('h3');
            mealName.classList.add('meaname');
            mealName.textContent = meal.name;
            mealDiv.appendChild(mealName);

            const mealPrice = document.createElement('h6');
            mealPrice.classList.add('meaprice');
            mealPrice.textContent = `Price: $${meal.price}`;
            mealDiv.appendChild(mealPrice);

            const mealCalories = document.createElement('h6');
            mealCalories.classList.add('meacalories');
            mealCalories.textContent = `Calories: ${meal.calories}`;
            mealDiv.appendChild(mealCalories);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteMeal(this, index);
            });
            mealDiv.appendChild(deleteButton);

            mealContainer.appendChild(mealDiv);
        });
    }

    displayMeals();

    function deleteMeal(button, index) {
        meals.splice(index, 1); 
        localStorage.setItem('meals', JSON.stringify(meals)); 
        displayMeals(); 
    }
});


