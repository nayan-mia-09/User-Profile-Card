import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around gap-2 bg-amber-200 m-2 shadow text-black'>
      <div>
        <p >© 2025 Nayan Mia. All rights reserved.</p>
        <p>Designed & developed by Nayan Mia</p>
      </div>
      <div>
        <a href="mailto:nayanmia0903@gmail.com " className='font-mono hover:shadow-2xl hover:text-blue-500' >Mail Me</a> <br />
        <a href="tel:+8801778130965"  className='font-mono hover:shadow-2xl hover:text-lime-600'>Call Me</a>
      </div> 
      <div className='my-2'>
        <ul className='flex gap-3'>
          <li className='hover:text-blue-400'><a href="#" >LinkedIn</a></li>
          <li className='hover:text-black '><a href="#">Github</a></li>
          <li className='hover:text-emerald-400'> <a href="#">Netlify</a></li>
          <li className='hover:text-black'><a href="#">Dev.to</a></li>
        </ul>
        
        
       
        
      </div>
    </div>
  )
}

export default Footer
