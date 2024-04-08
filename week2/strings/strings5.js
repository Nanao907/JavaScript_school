/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */
let a = "Tokyo";
let b = "Osaka";
let c = "Nara";

function getLastCharacter(a) {
  return a.slice(-1);
}

console.log(getLastCharacter(a));
console.log(getLastCharacter(b));
console.log(getLastCharacter(c));
