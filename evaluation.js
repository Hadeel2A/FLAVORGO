
var selectedImages= 0;
function changeImages1() {
    selectedImages =1;
    localStorage.setItem("myRate", "1 Star");
    var image = document.getElementById('star1');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star';
    }
}

function changeImages2() {
selectedImages =1;
localStorage.setItem("myRate", "2 Stars");
    var image = document.getElementById('star1');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star2');{
        image.src = "img/yellow_star.png";
        image.alt = 'yellow star'; 
    }
}

function changeImages3() {
selectedImages =1;
localStorage.setItem("myRate", "3 Stars");
    var image = document.getElementById('star1');{
        image.src = "img/yellow_star.png";
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star2');{
        image.src = "img/yellow_star.png";
    }
    var image = document.getElementById('star3');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
}

function changeImages4() {
selectedImages =1;
localStorage.setItem("myRate", "4 Stras");
    var image = document.getElementById('star1');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star2');{
        image.src = "img/yellow_star.png";
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star3');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star4');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
}

function changeImages5() {
selectedImages =1;
localStorage.setItem("myRate", "5 Stars");
    var image = document.getElementById('star1');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star2');{
        image.src = "img/yellow_star.png";
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star3');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
    var image = document.getElementById('star4');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star';
    }
    var image = document.getElementById('star5');{
        image.src = "img/yellow_star.png"; 
        image.alt = 'yellow star'; 
    }
}

function checkSelection() {
    var selectElement = document.getElementById("restSelect");
    var restaurantName = selectElement.options[selectElement.selectedIndex].text;
    if (selectElement.value == "" ) {
        alert("you must choose a restaurant before submitting the form!");
        return false;
    }
    else if (selectedImages == 0){
    alert("you must rate the restaurant before submitting the form !");
    return false;
    }
    else{
        alert("Thank you for your feedback!\nYour rating for restaurant " + restaurantName + " is " + localStorage.getItem("myRate"));
        window.location.href = "index.html";
        return false;
    }
}


