console.log("start");
/*const promise = new Promise( (resolve,reject) => {
	let completePromise = true;
	if(completePromise){
		resolve("promise one completed");
	}else{
		reject(new Error("Promise not completed"));
	}
	
});*/

const promise = new Promise( (resolve) => {
	setTimeout( ()=>{
		resolve("promise one is completed");
	},3000);
});

const promise2 = new Promise( (resolve,reject) => {
	setTimeout( ()=>{
		resolve("promise two is completed");
	},2000);
	
	
});


/*promise
       .then( (res)=>{
		   console.log(res);
	   })
	   .catch( (err) =>{
		   console.log(err.message);
	   });

promise2
        .then( (res)=>{
			console.log(res);
		});
       
	   

	*/

/*Promise.race([promise,promise2])
        .then((res)=>{
			console.log(res);
		})*/
Promise.all([promise2,promise]).then( ([res1,res2])=>{console.log(res1,res2)} );
console.log("end");	   