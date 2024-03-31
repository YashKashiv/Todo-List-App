import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-purple-900 text-white py-3'>
        <div className="logo">
            <span className="cursor-pointer hover:text-sky-700 font-bold text-xl mx-8">iTask</span>
        </div>
        <ul className="flex gap-8 mx-8">
            <li className='cursor-pointer hover:text-sky-700'>Home</li>
            <li className='cursor-pointer hover:text-sky-700'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
