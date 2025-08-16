import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")

    const handaleSubmit = () => {
        alert(`Hello, Good After-noon ${name}`)
    }
  return (
    <div>
      <h1 className='bg-blue-500 text-center'>Form Practice onChange and useState</h1>
      <div className='text-center m-5'>
 <input type="text" placeholder='enter your name' value={name}  className='text-center  border border-red-700' onChange={(e) => setName(e.target.value)}/> 

 <button type='submit' className='btn btn-warning' onClick={handaleSubmit}>Submit</button>
      </div>
     

    </div>
  )
}

export default Form
