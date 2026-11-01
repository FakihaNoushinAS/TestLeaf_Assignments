//operators  is a symbol that performs operations on variables and values. In JavaScript, there are several types of operators, including arithmetic, assignment, comparison, logical, and more.


//check if the number is positive and odd
var number = -1;
if (number > 0 && number % 2 !== 0) {
    console.log("Number is positive and odd");
}
else if (number> 0 && number % 2 ==0) {
    console.log("Number is positive and even");
}
else if (number < 0  && number % 2!=0) {
    console.log("Number is negative and odd");
}
else if (number < 0 && number %2 == 0) {
    console.log("Number is negative and even");
}
else if (number == 0) {
    console.log("Number is zero");
}

