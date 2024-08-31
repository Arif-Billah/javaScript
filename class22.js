console.log("class 22");

//const strNumbers = prompt("input the numbers as an array");// string to number

const strInput = prompt("input the numbers as an array");
//1,2,3
const strNumbers = strInput.split(',');

 /*const numbers = strNumbers.map(n =>{
	 const convertedNumber = parseInt(n);
	 return convertedNumber;
 });*/
 const numbers = strNumbers.map(n => parseInt(n));
 
 
 //const numbers = [1,2,3];//this is fixed,so we want to take paramiter as we want using prompt
 //const numbers = prompt("input the numbers as an array");
 let sum = 0;
 for(let index = 0; index<numbers.length; index++){
	 let n = numbers[index];
	 sum = sum + n;
 }
 
 let sum2 = numbers.reduce( (s,c,i) => s = s+c,0 );
 console.log(sum2);
 
 /*
 console.log("practice");
//const numbers = [1,2,3];
const numberInput = JSON;
const strNumber = prompt("please enter number Array");
const numberInput = JSON.parse(strNumber);
//console.log(numbersInput);
//console.log(numbers);

const numberInput = strNumber.split(',');
const numbers = numberInput.map(n => parseInt(n))
 /*[0 :1,]
   [0 :2,]
   [0 :3,]*/
const sum = numbers.reduce( (s,c) => s = s+c,0);
console.log(sum);
let sumN = 0;
for(let index = 0;index<numbers.length;index++){
	let n = numbers[index];
	sumN = sumN + n;
}
console.log(sumN);
 
