import { useState } from 'react';
import './App.css';

function App() {

  const [color,setColor] = useState("olive");
  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
        <div onClick={ () => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm '
         style={{backgroundColor:"red"}}>
           red
        </div>
        <div onClick={ () => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm '
         style={{backgroundColor:"blue"}}>
           blue
        </div>
        <div onClick={ () => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm '
         style={{backgroundColor:"gray"}}>
           white
        </div>
        <div onClick={ () => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm '
         style={{backgroundColor:"black"}}>
          black
        </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App;
