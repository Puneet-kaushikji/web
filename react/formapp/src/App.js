import './App.css';
import React from 'react'
import { useState } from 'react';

function App() {
  const [formData,setFormData] = useState( {firstName:"",lastName:"",email:"",
  comments:"", isVisible:true});  
  console.log(formData);
  function changeHandler(event){
    const {name , value , checked, type} = event.target;
    setFormData( (prevFormData) =>{
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }
  
  return (
    <div className="App">
     <form action="">
      <input type="text" 
      placeholder='Enter first value' 
      onChange={changeHandler} 
      name="firstName"
      /> 
      <br /><br /><br />
      <input type="text" 
      placeholder='Enter secound value' 
      onChange={changeHandler}
      name="lastName"
      />
      <br /><br /><br />
      <input type="email" 
      placeholder='Enter Email' 
      onChange={changeHandler}
      name="email"
      />
      <br /><br /><br />
      <textarea 
      placeholder='Enter Text' 
      onChange={changeHandler}
      name="comments"
      />
      <br /><br /><br />
      <input type="checkbox"
      onChange={changeHandler}
      name='isVisible'
      id= 'isVisible'
      checked ={formData.isVisible}
      />
      <label htmlFor="isVisible">Am I Visible ?</label>
     </form>
    </div>
  );
}

export default App;
