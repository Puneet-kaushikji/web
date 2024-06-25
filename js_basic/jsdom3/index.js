//  adding 100 paragraph
/*
const t1 = performance.now();
for(let i=1;i<=100;i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;
    
    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log(" THis took = " + (t2-t1) + " ms");

// optimizing the above code 
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=1;i<=100;i++){
        let element = document.createElement('p');
        element.textContent = 'This is para ' +i;
        myDiv.appendChild(element);
    }
    document.body.appendChild(myDiv);
    const t4 = performance.now();
    console.log(" THis took = " + (t4-t3) + " ms");
    */


    // let fragment = document.createElementFragment();
    // for(let i=1;i<=100;i++) {
    //     let newElement = document.createElement('p');
    //     newElement.textContent = 'This is Para ' + i;
        
    //     fragment.appendChild(newElement);
    // }
    // document.body.appendChild(fragment); //1 Reflow , 1 Repaint


// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMsg(){
//     let para = document.createElement('p');
//     para.textContent = 're:zero starting life from zero';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMsg();

    