console.log("promise21");

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
	//for(let index = 0; index<5; index++){
		const promises = [];
		for await (const index of [...new Array(5)].keys()){
		console.log("Lopping:\t", index, '\t', new Date().toLocaleTimeString());
		const startPromise =  sleepWithPromise(index*1000);
		const pomise2 = startPromise.then( (start) => {
		const numPrime = isPrime(index); 
		console.log("isPrime: ",index,"result: ",numPrime,"start: ",start,"end",new Date().toLocaleTimeString());
		console.log("index exicuted",index,new Date().toLocaleTimeString());//i want to wait for sleepWithPromise
			//return index;
			return {start, index, numPrime, now: new Date().toLocaleTimeString()};
		});
		//promises.push(startPromise);
		promises.push(pomise2);
	}
	const result = await Promise.all(promises);
	console.log('looping done',result);
	
}

(async ()=>{
	await syncWithPromise();
})().then( () => {
	console.log('all done');
});

console.log("Last line");

 



	









