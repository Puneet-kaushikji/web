

// setTimeout(function(){
//     console.log('third');
// },3000);

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');


// let meraPromise1 = new Promise(function(  resolve, reject){
//     setTimeout(function(){
//         console.log('I\'m inside promise1');
//     },5000);
//     // resolve(2727);
//     reject(new Error('Bro you got an error'));
// });

// meraPromise1.then((value) => {console.log(value)} , (error) => { console.log('i am now become an Error')}); 
// meraPromise1.catch((error) => { console.log('i am now become an Error')});

// let meraPromise2 = new Promise(function(  resolve, reject){
//     setTimeout(function(){
//         console.log('I\'m inside promise2');
//     },3000);
//     // resolve(2727);
//     //reject(new Error('bro got an error'));
// });


// console.log('the first');


/*
let waadaa1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('setimeout1 started');
    }, 2000);
    resolve(true);
});

let output = waadaa1.then(() => {
    let waadaa2 = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('setimeout2 started');
        } ,3000);
        resolve ('waada 2 resolved');
    });
    return waadaa2;
});

output.then((value) => console.log(value));
*/

// async function abcd(){
//     return 'puneet kaushik';
// }


/*
async function utility(){

    let dMsm = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('delh me high on temperature');
        }, 5000);
    });

    let hMsm = new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('high Hyderabad with cool in state');
        }, 6000);
    });

    let dM = await dMsm;
    let hM = await hMsm;

    return [dM ,hM];
};
*/


// Using Get method for fetching data from api using json.

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output =  await content.json();
//     console.log(output);
// }

// utility();



// using Post method 
/*
async function helper(){

let option = {
    method: 'POST',
    body: JSON.stringify({
      title: 'Puneet kaushik',
      body: 'sunny deal si body',
      userId: 1971,
      weight : 77,
      skillsLevel:6,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  let content = await fetch('https://jsonplaceholder.typicode.com/posts',option);
  let response = content.json();
  return response;

}

async function utility(){
    let ans = await helper();
    console.log(ans);
}

utility();
*/


//Closures
/*
function init() {
    var name = "Mozilla";            // local variable by init
    function displayName() {
                                    // displayName() forms the closure
      console.log(name);            // use variable declared in the parent function
    }
    displayName();
}
init();
*/

/*
function makeFunc() {
    const name = "Monkey .D Loffy";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  */

function outer(){

    let a = 5;
    function inner(){
        let a=3;
        console.log(a);
        function inner2(){
            let a = 7;
            console.log(a);
            function inner3(){
                console.log(a);
            }
            inner3();
        }
        inner2();
    }
    inner();
    console.log(a);
}

outer();