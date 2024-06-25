// q1. greetings 
// function greet(name){
//     console.log(`Hello ${name} , How is your day today`);
// }

// greet('Puneet kaushik')


//q2.square of a number
// function square(numb){
//     const sqr = numb **2;
//     return sqr;
// }

// let result = square(4);
// console.log(result);




//q3. a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string

// function countLetters(str){
//     const counts = {};
//     for(i=0;i < str.length;i++){
//     const char = str[i];
//     if (counts[char]) {
//         counts[char]++;
//     } 
//     else {
//         counts[char] = 1;
//     }
//     }
//     return counts;
// };

// const letterCounts = countLetters("WebDevelopment");

// console.log(letterCounts);



//q4. function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// };

// const counter = createCounter();


// console.log(counter());
// console.log(counter());
// console.log(counter());



//Q5. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

// function sumEvenNumbers(num){
//     const sum =0;
//     return function(){
//     for(let i=1;i<=num ;i++)
//         if(num%2 == 0){
//         sum = sum +i;
//     }
//     return sum;
// }
// }

// const sumE = sumEvenNumbers(15);
// console.log(sumE);



// Q6. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0 ; i < arr.length; i ++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let sumIs = sumArray([2,4,5,6,3,7,4,9]);
// console.log(sumIs);


//Q7. Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

// function filteringOfArray(arr){
//     let filteredArr = [];
//     for(let i=0; i< arr.length; i++){
//         if(arr[i].length > 5){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

// console.log(filteringOfArray(['puneet' ,'ravi','saurabh','kartik','aditya','harsh']));




// Q8. Write a function that takes an object and returns an array of all the keys in the object.
// function objectKeys(obj){
//     const keys = Object.keys(obj);
//     return keys;
// }

// const person = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     city: "New York",
//   };

//   console.log(objectKeys(person));



// Q9. Write a function that takes an array of objects and returns an array of all the values of a specified property name.

// function getPropertyValues(arr, propName) {
//     // Using Array.map() method to get the values of the specified property
//     const values = arr.map((obj) => obj[propName]);
  
//     return values;
//   }

//   const people = [
//     { name: "Pranay", age: 20, gender: "male" },
//     { name: "Nidhi", age: 21, gender: "female" },
//     { name: "Soumya", age: 21, gender: "male" },
//   ];
  
//   console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
//   console.log(getPropertyValues(people, "age")); //  [20, 21, 21]



  //Q10. Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

  function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }
  
  // Test case 1
  const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
  const maxObj1 = findMaxByProperty(arr1, "price");
  console.log(maxObj1); // { name: 'orange', price: 3 }

  // Test case 2
const arr2 = [
  { name: "Pranay", age: 20 },
  { name: "Nidhi", age: 21 },
  { name: "Soumya", age: 21 },
];
const maxObj2 = findMaxByProperty(arr2, "age");
console.log(maxObj2); // { name: 'Nidhi', age: 21 }