const a = "50";
const b = 50;
const c = 100;
const d = c % b; // 0
const e = c / 2; // 50

// true
const expression1 = b === e;
// false
const expression2 = e < d;

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b === e);
console.log(c > b);
console.log(d < 1);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2);
/* 
    expression1 -> true
    expression2 -> false
    true && false
    true && !false
    true && true
    true
*/

console.log(expression1 || expression2);
/*
    expression1 -> true
    expression2 -> false

    !true || false
    false || false => false

    true || false => true
*/
