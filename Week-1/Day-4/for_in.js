
// For In Loops are mostly used to iterate over Objects
const person = {
    'name' : "Bereket",
    'age' : 22,
};

for (const key in person) {
    console.log(key,person[key]);
}

let colors = ['red', 'green', 'blue'];

for (let index in colors){
    console.log(index, colors[index]);
}

