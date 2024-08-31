console.log("promise19");

const p = new Promise( (resolve,reject) => {
	
	//const start = Date.now();
	setTimeout( () => {
		//resolve("done");
		//reject("not done");
		//console.log("not resolving");
		try{
			resolve(new Date().toLocaleString());
		}catch(error){
			reject("error");
		}
		
	},2000);
	
});
console.log(p,new Date().toLocaleString());
const myPromise = (result)=>{console.log("myThen:",result);}
p.then(myPromise);

console.log("result:",p,new Date().toLocaleString());
