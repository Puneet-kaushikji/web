import './App.css';
import { useEffect, useState } from 'react';


function App() {
const [text,setText] = useState('');

// variation 1 -> Every Render 
// useEffect (()=> {
//   console.log("UI Rendering Done");
// });

// variation 2 -> First Render 
// useEffect (()=> {
//   console.log("UI Rendering Done");
// },[]);

// variation 3 -> Whenever dependency changes 
// useEffect (()=> {
//   console.log("UI Rendering Done");
// },[text]);  
// when change occur in text, text is called dependency here
// variation 4 -> To handle unmounting of a component
useEffect (()=> {
  //add event listener
  console.log("listener added");
  return () => {
    console.log("listener removed")
  }
},[text]);

function changeHandler(event){
  console.log(text);
  setText(event.target.value);

}

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} ></input>
    </div>
  );
}

export default App;
