//add two numbers
// function addValue(a=0,b=0){
//     let c = a + b;
//     console.log(c);
// }


// return string length  
// function stringR(str){
//     const len = str.length;
//     return console.log(len);
// }

// takes two numbers and displays their sum, difference, product, and quotient.
// const num1 = Number(21);
// const num2 = Number(43);

// function multi(a , b){
//     const sum = a+b;
//     console.log(`sum ${sum}`);
//     const  diff = a-b;
//     console.log(`difference ${diff}`);
//     const  product = a*b;
//     console.log(`product: ${product}`);
//     const quotient = a/b;
//     console.log(`quotient ${quotient}`);
// }

// multi(num1,num2);


//larger number
// function larger(num1 , num2){
//     if(num1>num2)
//     return num1;
//     else
//     return num2;
// }

//reverse a number
// function revString(str){
//     const str1 = str.split("").reverse().join("");
//     return str1;
// }


// check posotive negative and zero
// function checkN(z){
//     if(z==0){
//         return console.log(`number is zero`);
//     }
//     else if(z>0){
//         return console.log(`number is positive`);
//     }
//     else 
//     return console.log(`number is nagetive`);
// }


// table of the number
// function table(number){
//     for(let i = 1; i<= 10; i++){
//         let result = number * i;
//         console.log(`${number} * ${i} = ${result}`);
//     }
// }

// table(5);


// calculate the sum from 1 to number
// function number1(number){
//     let result =0;
//     for(let i = 1; i<=number;i++){
//          result = result+i;
//     }
//     console.log(result);
// }



//counts the vowals
// function countVowals(str){
//     const vowals = ['a','i','o','e','u'];
//     let count = 0;
//     for(i=0; i< str.length; i++){
//         if(vowals.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }


//Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
function findCommonElements(arr1, arr2) {
    // Create an empty array to hold the common elements
    let commonElements = [];
  
    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
      // Check if the current element is in arr2
      if (arr2.includes(arr1[i])) {
        // If the element is in arr2 and not already in commonElements array, add it
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    // Sort the commonElements array in ascending order
    commonElements.sort((a, b) => a - b);
  
    // Return the commonElements array
    return commonElements;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(arr1, arr2);
  console.log(commonElements); // Outputs: [3, 4, 5]


