// //your JS code here. If required.

// Get elements
let form = document.querySelector('form');  // Select the form
let ageBox = document.getElementById('age');  // Get the age input element by ID
let nameBox = document.getElementById('name');  // Get the name input element by ID


   

// Add event listener to form submit
form.addEventListener("submit", (e) => {
	
    e.preventDefault();  // Prevent default form submission behavior
	// Get input values
	
    let age = +ageBox.value;  // Convert age input to number
    let name = nameBox.value;  // Get name value

    // Validate if the inputs are empty
    if (ageBox.value == '' || name.length == 0) {
        alert(`Please enter valid details`);
    } else{
		
    // Promise for age check
    new Promise((resolve, reject) => {
        if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
        } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
        }
    })
    .then((response) => {
        setTimeout(() => {
            alert(response);  // Show success message after 4 seconds
        }, 4000);
    })
    .catch((error) => {
        setTimeout(() => {
            alert(error);  // Show failure message after 4 seconds
        }, 4000);
    });
	}
	
});






