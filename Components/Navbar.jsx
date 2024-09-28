import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
      <h1 className='text-lg font-semibold'>Todo App</h1>
      <ul className='flex gap-[40px] text-m'>  {/* Corrected className and closed quotes */}
        <li>Home</li>  {/* Corrected tag from <l1> to <li> */}
        <li>Products</li>  {/* Corrected tag from <l1> to <li> */}
        <li>About</li>  {/* Corrected tag from <l1> to <li> */}
        <li>Contact</li>  {/* Corrected tag from <l1> to <li> */}
      </ul>
    </div>
  )
}
