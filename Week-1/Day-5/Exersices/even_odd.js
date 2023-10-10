
showNumbers(10);
function showNumbers(limit){
    for (let index = 0; index <= limit; index++) {
        index % 2 == 0 ? console.log(index, "EVEN") : console.log(index, "ODD")         
    }
}