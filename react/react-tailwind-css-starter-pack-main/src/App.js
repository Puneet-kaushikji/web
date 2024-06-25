// import { useState } from "react";
import React, { useState } from 'react';
import "./App.css";

function App() {
  const[Count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(Count-1);
  }

  function increaseHandler(){
    setCount(Count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0390d4] font-medium text-2xl"> Increment && Decrement </div>
      <div className="bg-white flex justify-centere gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="text-center font-bold  border-[#bfbfbf] text-5xl">
        {Count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0390d4] text-white py-2 rounded-lg px-4 text-[25px]">
         Reset
      </button>
    </div>
  );
}

export default App;
