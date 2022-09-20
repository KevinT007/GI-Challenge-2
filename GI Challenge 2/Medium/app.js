const sentence = prompt("Type in a message");
const upperCase = sentence.toUpperCase;
const lowerCase = sentence.toLowerCase;

if (sentence === upperCase) {
  console.log(`Yelling`);
} else if (sentence === lowerCase) {
  console.log(`Whispering`);
} else {
  console.log(`Neither`);
}
