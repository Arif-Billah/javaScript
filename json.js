console.log("json");
var jstring = '{"name":"mern"}';
//we want to convert it to object
var jsonObj = JSON.parse(jstring);
var jsonstrfy = JSON.stringify(jsonObj);
console.log(jstring);


console.log(jsonObj);
console.log(jsonstrfy);