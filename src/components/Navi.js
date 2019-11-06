
import { Button, Nav, Navbar } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

export default function Navi() {


  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0 || window.scrollY === 50) {
      setScrolling(false);
    } else if (window.scrollY > 650) {
      setScrolling(true);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div>
 <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="transition" style={{ backgroundColor: scrolling ? "white": "transparent"}}>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ml-auto shift">
     <li><h4 href="#">HOME </h4></li>
     <li><h4 href="#">ABOUT </h4></li>
     <li><h4 href="#" >PROJECTS </h4></li>
     <li><h4 href="#">CONTACT </h4></li>
     </Nav>
     <Nav>
     </Nav>
   </Navbar.Collapse>
 </Navbar>

    </div>
  )
}
