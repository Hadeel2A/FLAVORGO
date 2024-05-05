document.addEventListener('DOMContentLoaded', function() {

    var today = new Date();

    
    var dayOfWeek = today.getDay();

    
    var daysToSunday = dayOfWeek === 0 ? 0 : dayOfWeek;

    
    var sundayDate = new Date(today);
    sundayDate.setDate(today.getDate() - daysToSunday);

    
    var formattedDate = sundayDate.toISOString().split('T')[0];

    
    document.getElementById('currentWeekDate').textContent = formattedDate;
});

function showMoreRestaurants() {

document.querySelector('.background-box2').style.display = 'flex';
document.querySelector('.background-box3').style.display = 'flex';
document.getElementById('moreButton').style.display = 'none';
}


function hideAllDescriptions() {
var descriptions = document.querySelectorAll('.res-des');
descriptions.forEach(function(description) {
   description.style.display = 'none';
});
}


function showDescription(element) {

hideAllDescriptions();
var description = event.target.closest('.rest1').querySelector('.res-des');
description.style.display = 'flex';

element.classList.add('expanded');
}


var restaurants = document.querySelectorAll('.rest1');
restaurants.forEach(function(restaurant) {
restaurant.addEventListener('mouseover', showDescription);

});


hideAllDescriptions();


function hideDescription(element) {
element.classList.remove('expanded');
}

