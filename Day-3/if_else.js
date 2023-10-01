
// Printing Message Based On the Hour
// If the hour is between 6AM and 12PM : Good Morning!
// If the hour is between 12PM and 6PM: Good Afternoon!
// If the hour is out of this range just print: Good Evening!

let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log("Good Morning!");
}else if(hour >= 12 && hour < 18){
    console.log("Good Afternoon!")
}else{
    console.log("Good Evening!");
}