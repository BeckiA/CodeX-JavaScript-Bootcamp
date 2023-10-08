
// Calculate Average of Marks
// Once After You Calculate the Average of Marks 
// Rate A-F based on the Ranges

const marks = [80, 80, 50];

console.log(calculateGrades(marks));

function calculateGrades(marks){
    
    const average = calculateAverage(marks);
    // if (average >= 90 && average <=100) {
    //     return 'A';
    // }else if(average >= 80 && average <= 89){
    //     return 'B';
    // }else if(average >= 70 && average <= 79){
    //     return 'C';
    // }else if(average >= 60 && average <= 69){
    //     return 'D';
    // }else{
    //     return 'F';
    // }

    if(average < 60) return 'F'
    else if(average < 70) return 'D'
    else if(average < 80) return 'C'
    else if(average < 90) return 'B'
    return 'A'
}   

// Crafting the code so simple
// Avoid the unecssary braces and
// Try to create a separate function that'll calculate 
// The Average of the numbers

function calculateAverage(marks){
    let sum = 0;
    for (let i = 0; i < marks.length; i++) 
        
        sum += marks[i];

    return sum / marks.length;
    
}