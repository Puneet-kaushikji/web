console.log("hello ar'nt workers");


//function call or invoke
run();


//function declration
function run(){
    console.log('yeah running');
}




//Named function assignment 
let stand = function walk(){
    console.log('walking');
}
//Anonymous function assignment 
let stand2 = function(){
    console.log('walking');
}

// stand();

// let jump = stand;

// jump();

// stand2();


/*let x = 1;
x= 'a';

console.log(x); */


// function sum(){
//     let total =0;
//     for(let value of arguments)
//     total = total + value;
//     return total;
// }

// console.log(sum(1,2));  // 3
// console.log(sum(1));   //NAN
// console.log(sum());  //NAN
// console.log(sum(1,2,3,4,5)); //3 

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);


// function sum(num, val,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


// Default Parameters
// function interest(p,r=6,y=10){
//     return p*r*y/100;
// }

// console.log(interest(1000,undefined,8));
// console.log(interest(1000,8));



// getter -> access properties
// setter -> change or mutate properties

/*let person = {
    fName:'puneet',
    lName:'kaushik',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value == String){
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName= parts[0];
        this.lName= parts[1];
    }
};  */


//  console.log(person);

/*try{
    person.fullName='saurabh kumar';
}
catch(e){
    alert(e);
}  */

// console.log(person.fullName);



// {
//     var a = 5;
// }
// console.log(a);


// function x(){
//     var a= 5;
// }
// console.log(a);  error

// for(var i =0;i<10;i++){
    
// }
// console.log(i);


// if(true){
//     var a=5;
// }
// console.log(a);


// function a(){
//     const ab=5;
// }
// const ab=5
// function b(){
//     const ab=5;
// }



let arr = [1,2,3,4,5,-5];
// let total = 0;
// for(let value of arr){
//  total = total + value;
// }
// console.log(total);

let totalSum = arr.reduce((accum , crntValue) => accum + crntValue ,0);
console.log(totalSum);



mySym = Symbol("key1");
console.log(mySym);
const jsUser = {
    name:"puneet kaushik",
    age: 21,
    [mySym]:"mykey1"
}
console.log(jsUser[mySym]);