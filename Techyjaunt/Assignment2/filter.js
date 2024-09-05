
const students = [{name:"Musa", age:21, grade:"A"}, {name:"Kelvin", age:24, grade:"C"}, {name:"Charles", age:20, grade:"C"}];

const filterByGrade = (students, grade) => {
    let result = [];
    students.forEach(person => {
        if (person.grade === grade) {
            result.push(person);
        }
    });
    
    return result;
};

console.log(filterByGrade(students, "A"));

