let modeBtn = document.querySelector("#mode");
let curr = 'light';
let body = document.querySelector('body');


modeBtn.addEventListener('click', ()=>{
    if(curr === 'light'){
        curr = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        curr = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }

    console.log(curr)
})