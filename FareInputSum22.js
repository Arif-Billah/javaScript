const strInput = prompt("input the numbers as an array");
const numbers = strInput.split(',').map(n => parseInt(n));
let sum2 = numbers.reduce( (s,c,i) => s = s+c,0 );
console.log(sum2);
 
  