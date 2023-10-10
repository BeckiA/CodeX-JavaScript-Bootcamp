
showPrime(10);

function showPrime(input){
    for (let number = 2; number <= input; number++) {
        
        const prime = isPrime(number);
        
      if (prime) {
        console.log(number);
      }     
        
    }
}

function isPrime(number){
    
    
        for(let factor = 2; factor < number; factor ++){
            if (number % factor === 0) {
                return false;
                   
            }
           
        }
        return true; 
    
}