console.log('to kese h aapp log')

let lName= '  puneet   ';

let fName = new String ( ' Puneet');

// let message = 'this is a 48 laws of manipulation and praseing smart peoples only';
// let word = message.split(' ');
// console.log(word);

// let message = `this is a 
// 48 laws of manipulation
//  and praseing ${lName} 
// peoples only`;
// console.log(message);

// let d = new Date();
// let d2= new Date('jun 20 2002 11:27');
// console.log(d2);


// let numbers = [1,2,3,4,5];
// console.log(numbers);

/*
Insertion
end  -> .push()
starting - > .unshift()
middle ->   .splice(index u want to insert , number of elmt want to dlt, elmnts) 
*/

// searching 
// console.log(numbers);
// console.log(numbers.indexOf(7));

// we want to check if a number exist in array 
// console.log(numbers.includes(4)); 

// console.log(numbers.indexOf(1,3));



// finding element in array of object type
// let courses = [ 
//     {no:1 , naam:'puneet'},
//     {no:2, naam:'kaushik'}
// ];

// console.log(courses);

/*let course = courses.find(function(course){
    return course.naam === 'kaushik';
})  */

// let course = courses.find(cour => cour.naam === 'puneet');
// console.log(course);      


//   Removing element from array 
// let numbers = [1,4,6,7,8,5,3];
// end 
// numbers.pop();
// begin 
// numbers.shift();
// middle 
// numbers.splice(1,1);
// console.log(numbers);


// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];
// numbers.length = 0 ;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);


// let first = [1,2,3];
// let sec = [3,4,5,6,];
// let  combined = first.concat(sec);
// console.log(combined);

// let sl = combined.slice(3,5);
// console.log(sl);


// spread 
// let first = [1,2,3];
// let sec = [3,4,5,6,];

// let combined = [...first,'a',false,...sec,'b', true];
// console.log(combined);

// copy kaise create kre 
// let another = [...combined];


// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);}

// arr.forEach(num => console.log(num));


// let num  = [10,20,30,40,50];
// const joined = num.join(',');
// console.log(joined);

// let msg = 'this is my first msg';
// let parts = msg.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// let num = [40,5,10,3,20,4];
// num.sort();
// console.log(num);
// num.reverse();
// console.log(num);

// let numm = [1,2,-1,-4];
// let filtered = numm.filter(value => value >=0);
// console.log(filtered);

// let num = [7,8,9,10,20];
// console.log(num);


// mapping 
// let items = num.map(values => 'student_No-' + values);
// console.log(items);

let number = [1,2,-3,-4];

let items = number
            .filter(value => value >=0)
            .map(numb =>  obj = {value:numb} );

console.log(items);