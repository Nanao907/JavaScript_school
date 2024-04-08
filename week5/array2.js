// Exerice 1: Determine array length and conditional check

/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function myAlphabetLenght() {
  if (myAlphabet.length > 5) {
    console.log(`The length of myAlphabet:
      ${myAlphabet.length} Array length is greater than or equal to 5.`);
  } else {
    console.log(
      `The length of myAlphabet: ${myAlphabet.length} Array length is less than 5.`
    );
  }
}
myAlphabetLenght();

// Exerice 2: Iterate over array and log each item with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

// Write your code here

planets.forEach((planet, index) =>
  console.log("Planet: ", planet, "Index: ", index)
);

// Exerice 3: Log array items with their types
const wowDatatypes = [1, "text", false, null, undefined];

// Write your code here
wowDatatypes.forEach((item, index) =>
  console.log("Item: ", item, "Index: ", index, "Type:", typeof item)
);
//
// Exerice 4: Log array items without using a loop
let myArr = [1, 2, "One", true];

// Write your code here
myArr.forEach((item) => console.log(item));

//
// Exerice 5: Find common courses between two students
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

// Write your code here
function findCommonCourse(student1Courses, student2Courses) {
  return student1Courses.filter((element) => student2Courses.includes(element));
}
console.log(
  "Common course:",
  findCommonCourse(student1Courses, student2Courses)
);

// Exerice 6: Log each letter of array items
let furniture = ["Table", "Chairs", "Couch"];
// Write your code here
furniture.forEach((item) => {
  console.log(`Letters in "${item}":`, item.split("").join(", "));
});

// Exerice 7: Filter positive temperatures
let temperatures = [-5, 3, -1, 22, -40, 5, 18];

// Write your code here
const getPositiveTemperatures = () => {
  const positiveTemp = temperatures.filter((temperature) => temperature > 0);
  console.log(positiveTemp);
};
getPositiveTemperatures();
// Exerice 8: Filter Odd Years
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Write your code here
const getOddYears = (years) => years.filter((year) => year % 2 !== 0);
// Sample usage - Uncomment to test your function
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
