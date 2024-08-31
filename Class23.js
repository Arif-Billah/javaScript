console.log("class23");

/**const student = {
	
	"name" : "John",
	"age"  : 20
	
}

const students = [student];*/
/*const students = '[{
	
	"name" : "John",
	"age"  : 20
	
},
{
	
	"name" : "Alis",
	"age"  : 19
}]';
*/

//const studentInput = prompt("Please input student Array");

/*const studentInput = "[{
	"name"  : "John",
	"age"   : 20,
    "course":[
		{  
			"name" : "JavaScript",
			"Grade" : 90,
		} ,
		{
			"name" : "JavaScript",
			"Grade" : 80,	
		}
		
	]
},
{
	"name"  : "Alias",
	"age"   : 19,
    "course":[
		{  
			"name" : "JavaScript",
			"Grade" : 92,
		} ,
		{
			"name" : "JavaScript",
			"Grade" : 85,	
		}
	]
}];*/
const studentInput = '[{"name":"John","age":20,"course":[{"name":"JavaScript","grade":90},{"name":"Database","grade":85}]},{"name":"Alias","age":21,"course":[{"name":"JavaScript","grade":92},{"name":"Database","grade":80}]}]'

const students = JSON.parse(studentInput);
const grades = students.map( (student) => student.course.reduce( (sum,course) => sum = sum + course.grade,0))
const totalGrade = grades.reduce((sum,current) => sum+= current,0);	

console.log(totalGrade);
//console.log(students[0].course[0].Grade);
/*const sumOfAges = students.reduce( (sum,current) => sum = sum + current.age,0);
const avg = sumOfAges/students.length;
console.log(avg)*/

//console.log(students);



