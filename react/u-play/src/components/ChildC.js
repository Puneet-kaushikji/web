import React, { useContext } from 'react'
import { data ,data1 } from '../App'


const ChildC = () => {
  const firstN =  useContext(data);
  const gen =  useContext(data1);
  
  return (
    // <div>
    //   <data.Consumer>
    //     {(name)=>{
    //         return(
    //             <h1>Hi , i am puneet {name}</h1>
    //         )
    //     }}
    //   </data.Consumer>
    // </div>

    <div>
      <h1> my name is p . {firstN} and i am {gen}</h1>
    </div>

  )
}

export default ChildC
