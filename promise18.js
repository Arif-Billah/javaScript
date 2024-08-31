console.log("hello");

const isPrime = (number) => {
	if(number<2)return false;
	for(let i = 2; i<number; i++){
		if(number % i ===0)return false;
	}
	return true;
}

const sleepWithPromise = (number) => {
	const p = new Promise( (resolve) => {
    const start = Date.now();
	
	setTimeout( ()=>{
	resolve(new Date(start));
	},number);
		
	});
	console.log('');
	return p;
}


const syncWithPromise = () => {
	for(let index = 0; index<10; index++){
		console.log("Lopping:\t", index, '\t', new Date());
		sleepWithPromise(index*1000).then( (start)=>{
			const numPrime = isPrime(index); 
			console.log(
			
			"isPrime: ",
			index,
			"result: ",
			numPrime,
			"start: ",
			start,
			"end",
			new Date()
			);
		});	
	}
}

syncWithPromise();
console.log("done");