//your JS code here. If required.


let form = document.querySelector('form');
let input1 = document.querySelector('#age');
let input2 = document.querySelector('#name');
let btn = document.querySelector('button');
let container = document.querySelector('container');

btn.addEventListener('submit' => {
	e.preventDafaul();
	let input1Value = input1.value;
	let input2Value = input2.value;

	if(input1Value.length == 0 || input2Value === undefined){
		alert('Please enter valid details.');
	}

	new Promise((resolve,reject) => {
		let flag = (input1Value > 18)
		resolve(flag);
	})
}).then((flag)=>{
	setTimeout(()=> {
		container.innerText = `Welcome, . You can vote.`
	},4000)
})
.catch((error)=>{
	setTimeout(()=>{
		container.innerText = `Oh sorry ${input1Value}. You aren't old enough.`
	},4000)
})