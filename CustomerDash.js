function getCurrentWeekDate() {
    var now = new Date();
    var dayOfWeek = now.getDay(); // Sunday - 0, Monday - 1, etc.
    var numDay = now.getDate();
    var startOfWeek = new Date(now.setDate(numDay - dayOfWeek));
    var dd = String(startOfWeek.getDate()).padStart(2, '0');
    var mm = String(startOfWeek.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = startOfWeek.getFullYear();
    startOfWeek = mm + '/' + dd + '/' + yyyy;
    return startOfWeek;
}

document.getElementById('weekDate').innerText = getCurrentWeekDate(); 
function showMoreRestaurants() {
    var hiddenRestaurants = document.querySelectorAll('.restaurant.hidden');
    hiddenRestaurants.forEach(function(element, index) {
        if (index < 5) { // Show 5 more restaurants each click
            element.classList.remove('hidden');
        }
    });
}

document.getElementById('moreBtn').addEventListener('click', showMoreRestaurants);