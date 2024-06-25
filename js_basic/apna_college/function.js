//Arrow function
const arrowfuc = (a,b) => {
    console.log(a+b);
}



// multi of arrow function
const multi = (a,b) => a*b;   // default return;


//pq1 take string and count vowals

function countvowal(str){
    let count = 0;
    for(const char of str){
        if(char == 'a' || char == 'i' || char == 'o' || char == 'u' || char == 'e'){
            count++;
        }
    }
    console.log(count);
}

const vow = (str) => {
    let count = 0;
    for(const char of str){
        if(char == 'a' || char == 'i' || char == 'o' || char == 'u' || char == 'e'){
            count++;
        }
    }
    return count;
}


//   forEach loop   // higher order function // takes another function as parameter
// return same array
// let arr = [1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// })
let arr = [1,2,3,4,5];
arr.forEach((val , index , array) => console.log(val ,index, array));



// pq3 for an array print square of numbers
let arr1 = [1,2,3,4,5];
arr.forEach((val)=> (console.log(val*val)));
// another method
let calculate = (val) => (console.log(val*val));
arr1.forEach(calculate);


// Map creates a new array after performing some operations
  // arr.map(callbackfn(value,index,array))
 let nums = [67,88,99];
 let newarr = nums.map((val) => (val))
 console.log(newarr);


 // Filter array  , filter new array
 let thearray = [34,45,56,79,12,30,37];
 let Evenarray = thearray.filter( (val) => { 
    return val%2 ===0;
 })
 console.log(Evenarray);


 // Reduce   // when we want single o/p from many i/p
 let  output = arr1.reduce((result, curr) => (result+curr));
 console.log(output);
  output = arr1.reduce((result, curr) => (result<curr?curr:result));
 console.log(output);


 //pq4 filter out student who scored more than 90;

 let stuArray = [34,56,98,54,67,79,96,99];
 let passStud = stuArray.filter((val) => val >= 90);
 console.log(passStud);


 // pq5 take num from user and print numbers till n
 let numb = prompt('Enter number');
 let arrS = [];
 for(let i=0 ; i< numb; i++){
    arrS[i] = i+1;
 } 

 let redArray = arrS.reduce((result , curr) => (result + curr));
 console.log(redArray);