
import { Button, NavLink, Nav, Navbar } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="transition" style={{ backgroundColor: scrolling ? "white" : "transparent" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto shift">
            <Link className="nav-link px-3"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}>
              <li><h4>HOME </h4></li>
            </Link>
            <Link className="nav-link px-3"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}>
              <li><h4>ABOUT </h4></li>
            </Link>
            <Link className="nav-link px-3"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}>
              <li><h4>PROJECTS </h4></li>
            </Link>
            <Link className="nav-link px-3"
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}>
              <li><h4>CONTACT</h4></li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}
