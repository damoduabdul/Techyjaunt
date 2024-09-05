
const Calculate = (value1, value2, operator) => {

if (operator === "add"){

    value = value1+value2;
}
else if (operator === "subtract"){

    value = value1 - value2;
}
else if (operator === "multiply"){

    value = value1 * value2;
}
else if (operator === "divide"){

    value = value1/value2;
}
else {value = null
    console.log("unknown operator: ");}
return value;

};

console.log(Calculate(9,5,"add"));
console.log(Calculate(9,5,"subtract"));
console.log(Calculate(9,5,"multiply"));
console.log(Calculate(9,5,"divide"));
console.log(Calculate(9,5,"times"));
// Calculate(9,5,"subtract");
// Calculate(9,5,"multiply");
// Calculate(9,5,"divide");
// Calculate(9,5,"times");
// console.log(Calculate(5,9,"subttract"));

// elseif (operator === "subtract"){
//     value = value1 - value2;
// }
// elseif (operator === "multiply"{)
//     value = value1 * value2;
// }
// else {
//    value = value1 / value2;}
// return value;
// };


// console.log(res);