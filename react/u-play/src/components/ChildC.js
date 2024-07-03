import React from 'react'
import { data } from '../App'

const ChildC = () => {
  return (
    <div>
      <data.Consumer>
        {(name)=>{
            return(
                <h1>Hi , i am puneet {name}</h1>
            )
        }}
      </data.Consumer>
    </div>
  )
}

export default ChildC
