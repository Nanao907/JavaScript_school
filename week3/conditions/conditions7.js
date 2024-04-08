//Develop a function named assignGrade that:

//Accepts a single argument, a numerical score.
//Returns a letter grade for the score based on these criteria:
//- 'A' for scores 90 and above.
//- 'B' for scores 80 to 89.
//- 'C' for scores 70 to 79.
//- 'D' for scores 60 to 69.
//- 'F' for scores below 60.

// Sample usage - do not modify
//let score = 65;
function assignGrade(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  if (score < 60) {
    return "F";
  }

  console.log("You got a " + assignGrade(95));
  console.log("You got a " + assignGrade(81));
  console.log("You got a " + assignGrade(72));
  console.log("You got a " + assignGrade(64));
  console.log("You got a " + assignGrade(42));
}
