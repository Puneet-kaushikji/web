function asyncFunc(){
    return new Promise ((resolve , reject) =>{
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise ((resolve , reject) =>{
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        },4000);
    });
}

console.log("fetching data1...");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
    console.log("fetchinf data2...");
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});



function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();
}
