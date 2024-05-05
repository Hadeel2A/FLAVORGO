document.addEventListener('DOMContentLoaded', function() {
  
    const savedOffer = JSON.parse(localStorage.getItem('newOffer'));
    if (savedOffer) {
        const offerContainer = document.querySelector('.offer-container');
        offerContainer.innerHTML = savedOffer;
    }

    const deleteSelectedButton = document.getElementById('delete-selected-button');
    deleteSelectedButton.addEventListener('click', function() {
        const selectedCheckboxes = document.querySelectorAll('.offer-checkbox:checked');
        if (selectedCheckboxes.length === 0) {
            alert("Please select at least one offer.");
            return;
        }
        const confirmDelete = confirm("Are you sure you want to delete the selected offers?");
        if (confirmDelete) {
            selectedCheckboxes.forEach(function(checkbox) {
                checkbox.parentNode.remove();
            });
        
            localStorage.setItem('newOffer', JSON.stringify(document.querySelector('.offer-container').innerHTML));
            alert('Selected offers deleted successfully.');
        }
    });



    const addForm = document.getElementById('mform');
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const offerName = document.getElementById('offer-name').value.trim();
        const description = document.getElementById('description').value.trim();
        const photo = document.getElementById('photo').files[0];
    
        const nameRegex = /^[a-zA-Z\s]*$/; 
        
        if (!nameRegex.test(offerName)) {
            alert('Offer name should contain only letters.');
            return;
        }
    
        if (!offerName || !description || !photo) {
            alert('Please fill in all fields.');
        } else {
            const reader = new FileReader();
            reader.onload = function(event) {
          
                const newOfferHTML = `
                    <div class="offe">
                        <img src="${event.target.result}" alt="${offerName}">
                        <h4>${offerName}</h4>
                        <p>${description}</p>
                        <input type="checkbox" class="offer-checkbox" value="display">
                        <label for="offer6"></label>
                        <button class="delete-button">Delete</button>
                    </div>
                `;
    
                
                const offerContainer = document.querySelector('.offer-container');
                offerContainer.insertAdjacentHTML('afterbegin', newOfferHTML);
    
            
                localStorage.setItem('newOffer', JSON.stringify(offerContainer.innerHTML));
    
        
                addForm.reset();
    
                alert('New offer added successfully.');
            };
    
            
            reader.readAsDataURL(photo);
        }
    });
    
});




    