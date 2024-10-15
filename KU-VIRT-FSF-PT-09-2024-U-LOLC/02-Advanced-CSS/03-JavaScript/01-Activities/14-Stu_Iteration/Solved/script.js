// WRITE YOUR CODE BELOW
const students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

console.log(students.length);

console.log("For Loop");

for (let i = 0; i < students.length; i++) {
  console.log(`Great to see you, ${students[i]}!`);
}

console.log("For-of loop");

for (const student of students) {
  console.log(`Great to see you, ${student}!`);
}

console.log("while");

let i = 0;
while (i < 5) {
  console.log(`Great to see you, ${students[i]}!`);
  i = i + 1;
}
