// engage & apply -- simple if/else if/else practice
let temp = 55

if (temp > 75) {
    console.log("It's a hot day!");
} else if (temp > 70) {
    console.log("It's still a hot day!");
} else {
    console.log("It's a beautiful day!");
}

// engage & apply -- ticket checker program
let age = 30;
let isVIP = true;

if (age < 5){
    console.log("Free Entry!");
} else if (age >= 5 && age <= 12){
    console.log("Youth Ticket: $10");
} else if (age >= 13 && age <= 64){
    console.log("Adult Ticket: $20");
} else {
    console.log("Senior Ticket: $15");
}

if (isVIP){
    console.log("VIP Access Granted");
}

// engage & apply -- weather outfit selector
let weather = "snowy";

switch(weather){
case "cloudy":
    console.log("Just a light jacket.");
    break;
case "rainy":
    console.log("Don't forget a raincoat.");
    break;
case "snowy":
    console.log("Bundle up!");
    break;
case "sunny":
    console.log("T-shirt and shorts all day!");
    break;
case "windy":
    console.log("Hold on to your hat.");
    break;
default:
    console.log("I have no suggestions.");
}

// calculator
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
	return "Error: Division by zero";
    }
    return a / b;
}

function calculator(num1,num2,operation){
    switch(operation){
    case "add":
	return add(num1,num2);
    case "subtract":
	return subtract(num1,num2);
    case "multiply":
	return multiply(num1,num2);
    case "divide":
	return divide(num1,num2);
    default:
	return "Invalid operation";
    }
}

   // example
console.log(calculator(15,5,"add"));
console.log(calculator(15,5,"divide"));
console.log(calculator(15,0,"divide"));
