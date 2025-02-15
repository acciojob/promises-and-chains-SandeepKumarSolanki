//your JS code here. If required.

let form = document.querySelector('form')
let age = document.getElementById('#age')
let name = document.getElementById('#name');
let btn = document.querySelector('btn')
let container = document.getElementsbyClassName('container')

btn.addEventListener("submit" , (e)=>{
	e.preventDefault();

	let ageValue = +(age.value);
	let nameValue = name.value;

	if(ageValue == 0 || nameValue.length == 0 ){
		alert(`Please enter valid details.`)
		return ;
	}

	let flag = (ageValue > 18)

	new Promise((resolve , reject) => {
		if(flag){
			resolve(`Welcome, ${nameValue} . You can vote.` )
		}else{
			reject(`Oh sorry ${nameValue}. You aren't old enough`);
		}
	}).then((reponse) => {
		setTimeout(()=>{
			alert(reponse);
		},4000)
	}).catch(error => {
		setTimeout(()=>{
			alert(error);
		},4000)
	})
})





