//* ForEach Exercise 1: Favourite Foods
const favFood = ["lasagne", "pizza", "greek salad", "kebab"];

favFood.forEach((element) => {
  console.log(element);
});

//* ForEach Exercise 2: Sum
const numArray = [1, 2, 3, 5, 6, 10];

function sum(array) {
  let x = 0;
  array.forEach((element) => {
    x += element;
  });
  return x;
}
console.log("The sum of the array is: " + sum(numArray) + ".");

//* ForEach Exercise 3 Product
function product(array) {
  let x = 1;
  array.forEach((element) => {
    x *= element;
  });
  return x;
}
console.log("The product of the array is: " + product(numArray) + ".");

//* forEach Exercise 4: Student Grades
studentGrades = [70, 20, 53, 64, 78, 60, 32];
function passedGrades(studentGrades) {
  return studentGrades.filter((grades) => grades > 50);
}
console.log("Scores above 50: " + passedGrades(studentGrades) + ".");

//* Join Exercise 1: Names
const students = ["Paul", "Sam", "John"];
const studentsJoined = students.join(" ");
console.log(students);
console.log(studentsJoined);

// TODO Join Exercise 2: CSV

//*  Map Exercise 1: Miles Converter
const kilometers = [1, 5, 6, 4, 2];

function toMiles(km) {
  let miles = km.map((x) => x * 0.621371);
  return miles;
}
// TODO convert data, reduce decimal places, print inline
function toMilesFormatter(miles) {
  miles = miles.map;
}

console.log(toMiles(kilometers));

//* Map/filter Exercise 2: User input ages
const inputArray = ["18", "27", 19, 21, "22", NaN, undefined];

function filterAge(array) {
  let filteredArray = array.filter(Number);
  return filteredArray;
}
console.log("Filtered array: " + filterAge(inputArray) + ".");

// TODO Filter Exercises: canVote
// TODO Reduce Exercise 1: Sum
// TODO Reduce Exercise 2: Product
