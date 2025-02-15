// //your JS code here. If required.

// Get elements
let form = document.querySelector('#userForm');  // Select the form
let age = document.getElementById('age');  // Get the age input element by ID
let name = document.getElementById('name');  // Get the name input element by ID
let container = document.getElementsByClassName('container')[0];  // Correctly select the container div

// Add event listener to form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Get input values
    let ageValue = +(age.value);  // Convert age input to number
    let nameValue = name.value;   // Get name value

    // Validate if the inputs are empty
    if (ageValue === 0 || nameValue.trim().length === 0) {
        alert("Please enter valid details.");
        return;
    }

    // Promise for age check
    new Promise((resolve, reject) => {
        if (ageValue > 18) {
            resolve(`Welcome, ${nameValue}. You can vote.`);
        } else {
            reject(`Oh sorry ${nameValue}. You aren't old enough.`);
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
});





// let form = document.querySelector('form')
// let age = document.getElementById('#age')
// let name = document.getElementById('#name');
// let btn = document.querySelector('btn')
// let container = document.getElementsbyClassName('container')

// btn.addEventListener("submit" , (e)=>{
// 	e.preventDefault();

// 	let ageValue = +(age.value);
// 	let nameValue = name.value;

// 	if(ageValue == 0 || nameValue.length == 0 ){
// 		alert(`Please enter valid details.`)
// 		return ;
// 	}

// 	let flag = (ageValue > 18)

// 	new Promise((resolve , reject) => {
// 		if(flag){
// 			resolve(`Welcome, ${nameValue} . You can vote.` )
// 		}else{
// 			reject(`Oh sorry ${nameValue}. You aren't old enough`);
// 		}
// 	}).then((reponse) => {
// 		setTimeout(()=>{
// 			alert(reponse);
// 		},4000)
// 	}).catch(error => {
// 		setTimeout(()=>{
// 			alert(error);
// 		},4000)
// 	})
// })





