// let str = "PuneEt kaushik";

// for(let i of str){
//     console.log(i);
// }

/*let student = {
    name: "puneet",
    class:"Btech",
    cgpa : 7.5,
    branch:"cse"
}

for(let key in student){
    console.log(key, "=" ,student[key]);
}


//pq1
for(let i=0;i<=100;i++){
    if(i%2 !== 0){
        console.log(i);
    }
} */


let guessNum = prompt("Guess the number");
let Numb = 25;
while(guessNum != Numb){
    guessNum = prompt("Guess the number");
}
console.log("You guessed it right");