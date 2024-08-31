const studentInput = '[{"name":"John","age":20,"course":[{"name":"JavaScript","grade":90},{"name":"Database","grade":85}]},{"name":"Alias","age":21,"course":[{"name":"JavaScript","grade":92},{"name":"Database","grade":80}]}]'

const students = JSON.parse(studentInput);
const grades = students.map( (student) => student.course.reduce( (sum,course) => sum = sum + course.grade,0))
const totalGrade = grades.reduce((sum,current) => sum+= current,0);	
console.log(totalGrade);