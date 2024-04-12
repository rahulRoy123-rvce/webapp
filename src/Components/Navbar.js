import React from 'react'
import logo from '../Assets/logo_deCarbonn.png'

const Navbar = () => {
  return (
    <div className="flex flex-row mx-16">
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <div className="ml-64">
        <ul className="flex flex-row">  
         <li className="mx-4">Home</li>
         <li className="mx-4">Carbon Calculator</li>
         <li className="mx-4">Projects</li>
         <li className="mx-4">About</li>
         <li className="mx-4">Team</li>
         <li className="mx-4">Resources</li>
         <button className="mx-4">Connect</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
