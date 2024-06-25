// let heros = ['punnet','spider-man','iron-man','Hulk','Thor'];
// for(let hero of heros){
//     console.log(hero);
// }

//Upeprcase
let heros = ['punnet','spider-man','iron-man','Hulk','Thor'];
for(let hero of heros){
    console.log(hero.toUpperCase());
}


// pq1 find avg of students marks
// let marks = [88,99,98,82,92,90];
// let sum = 0;
// for(let val of marks){
//     sum +=val;
// }
// let avg = sum/marks.length;
// console.log(`the avg of marks is ${avg}`);


// pq2 show the amt after 10% discount
// let items = [250, 670, 900,300,50];
// let i = 0;
// for(let val of items){
//     console.log(`value of items : ${val}`);
//     let offer = val/10;
//     items[i] = val - offer;
//     console.log(`after discount ${items[i]}`);
//     i++;
// }


// print into string
let foodItems = ['tomato', 'noon','ata','jaat'];
console.log(foodItems);
console.log(s=foodItems.toString());

// concatinate arrays
let marvel = ['IronMan','Hulk','thor','black panther'];
let dc = ['batman','superman','aquaman','dark vader'];
let indian_hero = ['nagraj'];

let arrConcat = marvel.concat(dc,indian_hero);
console.log(arrConcat);

// shift unshift add and del value in starting;
arrConcat.unshift('puneet'); // push the value
console.log(arrConcat);
let pk = arrConcat.shift();   // pop and return the del value;
console.log(pk);


// slice copy of piece slice(startind,lastind+1), splice cut the piece splice(startIndex,delCount,newval)
console.log(arrConcat.slice(0,2));
//del value
let newcon = arrConcat.splice(0,2,'kaushik');
console.log(newcon);
//add value
 arrConcat.splice(2,0,'New Value');
console.log(arrConcat);




// pq3
let array1 = ['microsoft','boomberg','Uber','Google','IBM','netflix'];
  console.log(array1);
  array1.shift();
  console.log(array1);
  array1.splice(1,1,'Ola');
  console.log(array1);
  array1.push('Amazon');
  console.log(array1);