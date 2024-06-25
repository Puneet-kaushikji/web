// let str = "puneet kaushik";
// str = str.toUpperCase();
// console.log(str);


// trim method remove white spaces from starting and ending
let str0 = '   puneet kaushik   subarashi   ';
console.log(str0.trim());


///slicing give part of the string , does not include the ending part;
let str = '012345';
console.log(str.slice(0,3));


// concatination
let str1 = 'puneet-';
let str2 = 'kaushik';
let res =str1.concat(str2);
console.log(res);
// res = str1 + str2; will also work


// search and replace value in string // str.replace(searchVal,newVal);
let str3 = 'punit_kaushik'
console.log(str3.replace('i','ee'));
//console.log(str3.replaceAll('i','ee'));

// char at index
console.log(str3.charAt(0));


// pq1 make a user name staring with @ and end with number;
let thename = prompt("Enter the name");
let username = "@"+ thename + thename.length;
console.log(username);