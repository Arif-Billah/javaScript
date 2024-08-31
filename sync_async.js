console.log('task');

const task1 = (callback) =>{
	
	console.log("Task 1");
	callback();
	
}
const task2 = (callback) =>{
	
	setTimeout(() => {
		console.log("task2 data is loading");
		callback();
	},3000);
	
	/*let start = Date.now();
	let sleep = 3000;
	while(true){
		if(Date.now() - start > sleep)break;
	}
	console.log("task2 data is loading");*/
	
	
}
const task3 = (callback) =>{
	
	console.log("Task 3");
	callback();
	
}
const task4 = () =>{
	
	console.log("Task 4");
	
}
console.log('end');
/*task1( () => {
	task2( () => {
		task3();
	} );
} );*/
//task2();
//task3();
//task4();

task1( () => {
	task2( () => {
		task3(task4);
	});
});

