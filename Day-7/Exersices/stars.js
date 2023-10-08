
// Display stars based on the number of rows given

showStars(5);

function showStars(rows){
   
    for(let i = 1; i <= rows; i++){
        let stars = '';
        for(let j = 1; j <= i; j++){
            stars += '* ';
        }
        console.log(stars);
            
    }
 
}