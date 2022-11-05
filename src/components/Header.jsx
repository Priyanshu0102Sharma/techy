import React from 'react'
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

function Header() {
  return (
    <>
    <nav>
        <h1>Mr.Tech</h1>
        
    <main>

       <HashLink to={"/#home"}>Home</HashLink>
       <HashLink to={"/contact"}>Contact</HashLink>
       <HashLink to={"/#about"}>About</HashLink>
       <HashLink to={"/#brands"}>brands</HashLink>
       <Link to={"/service"}>Services</Link>
      
    
    </main>

    </nav>
    </>
  )
}

export default Header