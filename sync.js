
console.log("Hello Friends");

const isPrime = (number) => {
	if(number<2)return false;
	for(let i = 2; i<number; i++){
		if(number % i ===0)return false;
	}
	return true;
}

const syncCallbackFunction = (number,start) => {
	const numPrime = isPrime(number); 
	console.log(
	"isPrime: ",
	number,
	"result: ",
	numPrime,
	"start: ",
	start,
	"end",
	new Date()
	);
};

const sleepWithCallback = (number,callback) => {
	const start = Date.now();
	const sleep = number * 1000;
	while(true){
		if(Date.now() - start > sleep) break;	
	}
	callback(number,new Date(start));
}

const syncWithCallback = () => {
	for(let index = 0; index<10; index++){
		console.log("Lopping:\t", index, '\t', new Date());
		sleepWithCallback(index, syncCallbackFunction);	
	}
}
syncWithCallback();
let temp = document.getElementById('app');
temp.innerHTML = "<h1>Learn Mern Like a Pro</h1>";

