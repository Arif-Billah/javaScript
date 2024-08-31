const student = [
  {
	"name" : "John",
	"age": 20,
	"course" : [{
		"name" : "javaScript",
		"grade" : 80,
	},
	{
		"name" :"Database",
		"grade" :82,
	}]
	
  },
  {
  "name" : "Aise",
  "age": 22,
  	"course" : [{
		"name" : "javaScript",
		"grade" : 90,
	},
	{
		"name" :"Database",
		"grade" :92,
	}]
  
  }
]

const jsonStr = JSON.stringify(student);
const students = JSON.parse(jsonStr);
console.log(jsonStr);
console.log(students);

//console.log(students[0]);
//console.log(students[0].course[0]);

const stuMap = students.map((n)=>n.course.reduce((sum,course)=>sum+=course.grade,0));


console.log(stuMap);
const sumAge = students.reduce( (sum,student) => {
	sum = sum + student.age;
	//console.log(student.age);
	return sum;
},0);

console.log(sumAge);