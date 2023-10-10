
// Exersice Working on Landscape or protriat
function isLandScape(width, height){
    // return (width > height) ? true : false;
    // Better way to write the above function
    return (width > height);
}
let orientation = isLandScape(45, 30);
console.log(orientation)