console.log("start");

const myPromise = new Promise( (resolve,reject) => {
	
	resolve("task is completed");
	
});

   
console.log("end task");

const taskOne = () => {
	
	return new Promise( (resolve,reject) => {
		
		resolve("task One is compileted");
	});
	
}

const taskTwo = () => {
	
	return new Promise( (resolve,reject) => {
		
		setTimeout( ()=>{
			resolve("task Two is compileted");
			
		},3000);
		
	});
	
}

const taskThree = () => {
	
	return new Promise( (resolve,reject) => {
		
		resolve("task Three is compileted");
	});
	
}

taskOne().then( (res) => {console.log(res)})
         .then(taskTwo)
		 .then( (res) => {console.log(res)})
		 .then(taskThree)
		 .then( (res) => {console.log(res)})
		 
		 
		 
		 
		 
		
		 
		//  myPromise.then((res)=>{console.log(res)})

		 