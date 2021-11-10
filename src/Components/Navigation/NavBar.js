import React from 'react'
import "./navBar.css"

const NavBar = () => {
  return (
    <div>
      <nav className='navBar'>
        <button className="box div1" onClick={"backgroundColor:blue"}></button>
        <button className="box div2"></button>
        <button className="box div3"></button>
      </nav>
    </div >
  )
}

export default NavBar
