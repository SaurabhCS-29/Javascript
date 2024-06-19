const name = "saurabh"
const repocount = 50

// console.log(name + repocount);

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gamename = new String('Saurabh')

// console.log(gamename[0])
// console.log(gamename._proto_);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('b'));

const newString = gamename.substring(0,4)
// console.log(newString)

const anothrstring = gamename.slice(-8,4)
// console.log(anothrstring);


const newStringOne = "  saurabh   "
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://saurabhcs.com/saurabh%20chavan"

console.log(url.replace('%20','-'))
console.log(url.includes('javascript'));

console.log(gamename.split(' '));