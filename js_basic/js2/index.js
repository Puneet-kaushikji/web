console.log('to kese h aapp log')

//object create

// let rec = {
//     length : 1,
//     breath: 2,

//     draw: function(){
//         console.log('drawing rec');
//     }
// };


//   #######factory function

/*function createRectangle(len , bre){
     
    return rectangle = {
        length : len,
            breath: bre,
        
            draw(){
                console.log('drawing rec');
            }
    };
}

let rectangleObj1 = createRectangle(5,6);
let rectangleObj2 = createRectangle(5,6);
let rectangleObj3 = createRectangle(5,6);
*/


// ########constructor

//  Camelcase ->      numOfStudents
// Pascal Notation -> NumOfStudents

// constructor function -> Prop/methdos -> intialise/Define 

// function Rectangle(len,bre){
//     this.length=len;
//     this.breath=bre;
//     this.draw= function(){
//         console.log('drawing');
//     }
// }

// object creation using constructor function
// let rectangleObject = new Rectangle(4,5);
// rectangleObject.color= "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);


// let Rectangle1 = new Function(
//     'length', ' breath',
//     ` this.length=length;
//         this.breath=breath;
//         this.draw= function(){
//         console.log('drawing');`
//     )

// // object creation using Rectangle1 
// let rec1 = new Rectangle1(2,3);
// console.log(rec1);



// primitive type 

// let a=10;
// let b=a;
//   a++;
// console.log(a);
// console.log(b);


// reference type 

// let a = { value:10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);



// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);


// let a = {value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);


// for in loop
// let rec = { 
//     length:10,
//     breath:20
// };
/*for( let key in rec){
    // key reflected through key variable
    // values are reflected by rec[key]
    console.log(key,rec[key]);
} */

// for of loop
/*for( let key of Object.entries(rec)){
    console.log(key)
}*/


// if('color' in rec){
//     console.log('Present');
// }
// else console.log("Absent");


//   Object clone 1
// let src = { 
//     a:10,
//     b:20,
//     c:30
// };

/*let dest = {};

for(let key in src){
    dest[key]= src[key];
}
   src.a++;
console.log(dest);  */


// Object clone 2
/*let src = { 
    a:10,
    b:20,
    c:30
};
let src2 = {
    d:40
};
let dest = Object.assign({}, src,src2);
src.a++;
console.log(dest); */

// Object clone 3
/*let src = { 
    a:10,
    b:20,
    c:30
};
let src2 = {
    d:40
};

let dest = {...src,...src2};
console.log(dest);
src.a++;
console.log(dest);  */

