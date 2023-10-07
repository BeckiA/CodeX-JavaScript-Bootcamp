// Createing and displaying property of a function that'll show property and values
// Of a Map Object

const movies = {
  'title': 'Titanic',
  'releaseYear': 2000,
  'rating': 4.5,
  'director': 'Key Pole'
};

// Displaying the output
showProperties(movies);

function showProperties(map) {
  for (let key in map) {
    if (typeof map[key] === 'string') {
      console.log(key, map[key])
    }
  }
}
