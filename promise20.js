console.log("promise20");


/*const sleepWithPromise = (number) => {
	const p = new Promise( (resolve) => {
    const start = Date.now();
	
	setTimeout( ()=>{
	resolve(new Date(start));
	},number);
		
	});
	return p;
}

sleepWithPromise()
       .then( (start) => {})
	   .catch( (err) => {});*/

	   


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
	resolve(new Date(start).toLocaleTimeString());
	},number);
		
	});
	return p;
}


const syncWithPromise = async () => {
	for(let index = 0; index<5; index++){
		console.log("Lopping:\t", index, '\t', new Date().toLocaleTimeString());
		/*sleepWithPromise(index*1000).then( (start)=>{
			const numPrime = isPrime(index); 
			console.log("isPrime: ",index,"result: ",numPrime,"start: ",start,"end",new Date().getSeconds());
		});	*/
		const start = await sleepWithPromise(index*1000);
		const numPrime = isPrime(index); 
		console.log("isPrime: ",index,"result: ",numPrime,"start: ",start,"end",new Date().toLocaleTimeString());
		console.log("index exicuted",index,new Date().toLocaleTimeString());//i want to wait for sleepWithPromise
	}
}

/*const myPromise = syncWithPromise();

myPromise.then( () => {
	console.log("all done");
});*/

//how can you execute an assyncronous function from top level execution;
 /*(async()=>{
	await syncWithPromise();
})().then( () => {
	console.log("all done");
});*/

 const test =(async()=>{
	await syncWithPromise();
});

test().then( () => {
	console.log("alldone");
});
	









