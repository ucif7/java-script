
// question 1
let x = "123"
x = Number(x)
console.log(typeof x)
console.log(x+7)
console.log("*".repeat(50));

// question 2
function checkValue(value) {
  if (!value) {
    return "Invalid";
  }

  return value;
}
console.log(checkValue(0)); 
console.log("*".repeat(50));

// question 3
for (let i = 1; i < 10; i+=2) {
    console.log(i);
}
console.log("*".repeat(50));

// question 4
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 
console.log("*".repeat(50));

// question 5
let arr1 =[1,2,3];
let arr2 =[4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log("*".repeat(50));

// question 6
function getDay(number) {
  switch (number) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDay(2)); 
console.log("*".repeat(50));


// question 7
let a =["a","ab","abc"];
console.log(a.map(str => str.length));
console.log("*".repeat(50));


// question 8
function checkDivisibility(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}

console.log(checkDivisibility(15)); 
console.log("*".repeat(50));


// question 9
let square = (number) => {
  return number * number;
};
console.log(square(5));
console.log("*".repeat(50));

// question 10
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}

let person1 = { name: "John", age: 25 };
console.log(formatPerson(person1));
console.log("*".repeat(50));

// question 11
function sumNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));
console.log("*".repeat(50));

// question 12
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

delayedSuccess().then(message => 
  console.log(message));

// question 13
function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargest([1, 3, 7, 2, 4])); 
console.log("*".repeat(50));

// question 14
function getKeys(object) {
  const keys = [];

  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      keys.push(key);
    }
  }

  return keys;
}

let person = { name: "John", age: 30 };
console.log(getKeys(person)); 
console.log("*".repeat(50));
  
// question 15
function splitIntoWords(sentence) {
  return sentence.split(" ");
}

console.log(splitIntoWords("The quick brown fox"));
console.log("*".repeat(50));

