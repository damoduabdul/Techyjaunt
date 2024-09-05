const students = [{name:"Musa", age:21, grade:"A"}, {name:"Kelvin", age:24, grade:"B"}, {name:"Charles", age:20, grade:"A"}];

const AveAgeCalc = (students) => {
    let i = 0;
    TotalAge = 0;
    while (i < students.length) {
        TotalAge += students[i].age;
        i++;
    };
    AveAge = TotalAge/students.length;
    return AveAge;
};

console.log(AveAgeCalc(students));



