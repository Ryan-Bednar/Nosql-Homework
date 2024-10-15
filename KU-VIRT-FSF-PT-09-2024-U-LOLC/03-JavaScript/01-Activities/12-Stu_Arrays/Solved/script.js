// WRITE YOUR CODE HERE
const students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

console.log(students.length);

console.log(`Welcome to the class, ${students[0]}!`);
console.log(`Welcome to the class, ${students[1]}!`);
console.log(`Welcome to the class, ${students[2]}!`);
console.log(`Welcome to the class, ${students[3]}!`);
console.log(`Welcome to the class, ${students[4]}!`);

students[0] = "Bob";

if (students[0] === "Bob") {
  console.log(`${students[0]} is in class!`);
}
