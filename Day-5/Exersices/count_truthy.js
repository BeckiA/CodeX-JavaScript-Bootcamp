
let array = ['a', 'b', 'c'];

let allTruthies = countTruthy(array);
console.log(allTruthies);

function countTruthy(array){   
    let count = 0; 
    for(let truthies of array){
        if (truthies) {
           count ++;  
        }
    }
    return count;
}