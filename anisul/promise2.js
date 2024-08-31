console.log("start");

const task1 = () => {
	return new Promise( (resolve,reject) => {
		let test = "hello";
		resolve(test);
	});
}

const task2 = () => {
	return new Promise( (resolve,reject) => {
		
		
		resolve('task2 is completed');
	});
}

const task3 = () => {
	return new Promise( (resolve,reject) => {
		reject('task3 is not completed');
	});
}

/*task1()
      .then( (res) => console.log(res))
	  .then(task2)
	  .then( (res) => console.log(res))
	  .then(task3)
	  .then( (res) => console.log(res))
	  .catch( (err) => console.log(err))*/
	  
	  
	const allTask = async () =>{
		try{
			const t1 = await task1();
		console.log(t1);
		const t2 = await task2();
		console.log(t2);
		const t3 = await task3();
		console.log(t3);
			
		}catch(err){
			console.log(err);
		}
		
	}  
	
	allTask();
console.log("end task");  
	  
	  