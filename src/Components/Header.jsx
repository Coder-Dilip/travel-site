import React from 'react'
import "../Style-Components/Header.css"
import * as ReactBootStrap from "react-bootstrap";


function Header({ color }) {
    return (
        
  <ReactBootStrap.Navbar collapseOnSelect expand="sm" className="header__Back">
  <ReactBootStrap.Navbar.Brand href="" className="loulyLogo" style={{color:'rgb(0, 156, 156)',fontWeight:'bolder'}}>Louly.</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"  className="togglerIcon">
     <span style={{border:'none'}}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" height="20px" width="20px" alt=""/></span>
  </ReactBootStrap.Navbar.Toggle>
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="" className="nav__Links">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="" className="nav__Links">Trips</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="" className="nav__Links">About</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="" className="nav__Links">Contact</ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href=""><button className="profile__Button">Register</button></ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
   

    )
}



export default Header
