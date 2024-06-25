import React, { useState } from "react";

const App = () => {

  {/*const [input,setInput] = useState({ meme: '' })
  function collectHandler(event){
    event.preventDefault();
      setInput({ ...input,[event.target.name ]:event.target.value });
  console.log(input); */}
      
  const [count,setcount] = useState(0);
  function increamentHandler(){
    if(count<20)
    setcount(count+1);
  }
  function decreamentHandler(){
    if(count>0)
    setcount(count-1);
  }
  return (
    <div >
      <div className="flex h-screen bg-neutral-700 w-full  justify-center items-center content-center">
      <button className="text-2xl font-bold border-2 p-4 m-4 bg-gray-600 rounded-md" onClick={increamentHandler}>Increament</button>

      <p className="text-2xl p-4 m-4 bg-gray-600  rounded-md">value = {count}</p>

      <button className="text-2xl p-4 m-4 font-bold border-2 bg-gray-600 rounded-md" onClick={decreamentHandler}>Decreament</button>
      </div>
      



    {/*   <form  className=" " >
        <label
          htmlFor="first_name"
          className=" mb-2 text-sm font-medium "
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          name="meme"
          className=" border border-gray-300 text-gray-900  rounded-lg  block p-2.5 ml-4 mt-2"
          placeholder="Enter Name"
          onChange={collectHandler}
          required 
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800
         font-bold py-2 px-4 rounded-1 text-xl ml-4 mt-2"
        >
          Submit
        </button>

        <p className="ml-4 mt-2">yeah lo</p>
      </form>  */}


    </div>
  );
};

export default App;
