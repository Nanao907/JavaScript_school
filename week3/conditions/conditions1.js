/**
Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios.
*/

function canVote(age) {
  if (age >= 18) {
    return true;
  }
  return age >= 18;
}

console.log(canVote(25));
console.log(canVote(18));
console.log(canVote(10));
