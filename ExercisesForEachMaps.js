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
const students = ["Paul", "Sam", "John", "Ian", "Monica"];
const studentsJoined = students.join(" ");
console.log(students);
console.log(studentsJoined);

//* Join Exercise 2: CSV
function toCSV(arr) {
  let csv = arr.join(", ");

  return csv;
}
console.log(toCSV(students));

//*  Map Exercise 1: Miles Converter
const kilometers = [1, 5, 6, 4, 2];
// added toFixed to limit the decimal places to two
function toMiles(km) {
  let miles = km.map((x) => (x * 0.621371).toFixed(2));
  return miles;
}
console.log(toMiles(kilometers));

//* Map/filter Exercise 2: User input ages
const inputArray = ["18", "27", 19, 21, "22", NaN, undefined];

function filterAge(array) {
  let filteredArray = array.filter(Number);
  return filteredArray;
}
console.log("Filtered array: " + filterAge(inputArray) + ".");

//* Filter Exercises: canVote
const ages = [15, 18, 21, 50, 10, 100];

function canVote(arr) {
  let agesFiltered = arr.filter((x) => x >= 18);
  return agesFiltered;
}
console.log(canVote(ages));

//* Reduce Exercise 1: Sum
// use numArray defined earlier
function sum(arr) {
  const sumArr = arr.reduce((acc, current) => acc + current, 0);
  return sumArr;
}
console.log(`The sum of the elements of given array is: ${sum(numArray)}.`);

//* Reduce Exercise 2: Product
function product2(arr) {
  const productArr = arr.reduce((acc, current) => acc * current, 1);
  return productArr;
}
console.log(`The product of the elements of given array is: ${product2(numArray)}`);
