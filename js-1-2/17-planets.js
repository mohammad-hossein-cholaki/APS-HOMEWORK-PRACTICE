let planets = [ 'Moon', 'Earth', 'Jupiter', 'Uranus' ]

/// come on... everyone know that 'Moon' is not a planet, let's remove it
/// add 'Mercury' at the end of your array
/// add 'Mars' at the beginning of your array


// YOUR CODE BELOW THIS LINE:
planets.shift()
planets.push("Mercury");
planets.unshift("Mars");

console.log(planets);







// console.log the final answer
// it should be like:
// ['Mars', 'Earth', 'Jupiter', 'Uranus', 'Mercury']
