// function eventFunction(){
//     console.log('I have clicked on the document file');
// };


// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction);


// const content = document.querySelector('#wrapper');

// content.addEventListener('click',function(kaushikevent){
//     console.log(kaushikevent);
// });

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log('if you are unlucky than that\'s your power');
// });



/*let myDiv = document.createElement('div');

function paraStatus(event){
    console.log('para ' + event.target.textContent );
}
myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=100;i++){
    let newElement= document.createElement('p');
    newElement.textContent = 'This is para'+ i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
*/

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN')
    console.log('span is spanish ' + event.target.textContent);
});