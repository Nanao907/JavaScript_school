/**
Refine the skipFirstCharacter function to return a string containing all characters from the text parameter, excluding the first character.

 */

a = "Tokyo";
b = "Osaka";
c = "Sapporo";

function skipFirstCharacter(a) {
  return a.slice(1);
}

console.log(skipFirstCharacter(a));
console.log(skipFirstCharacter(b));
console.log(skipFirstCharacter(c));
