import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function backHandler(){
    navigate(-1);
  }
  return (
    <div>
    <div>
      This is About Page
    </div>
    <div>
    <button onClick={backHandler}> go Back</button>
    </div>
    
    </div>
      
  )
}

export default About
