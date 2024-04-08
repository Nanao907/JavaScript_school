let sum = 0;
let counter = 0;
do {
  let input = Number(promt("enter a number"));
  sum += input;
  counter++;
} while (counter !== 5);
console.log("Average was ${sum/counter}");
