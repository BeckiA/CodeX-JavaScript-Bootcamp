
// Exersice 1
// Write a function that takes two numbers and return the maximum of the two!
let maxOfTwo = function(num1, num2){
    if (num1 > num2){
        return console.log(num1,"is the maximum");
    } else{
        return console.log(num2,'is the maximum');
    }
};

maxOfTwo(4,5);
maxOfTwo(7,8);