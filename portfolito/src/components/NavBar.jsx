import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logos/logo.svg'
import navicon1 from '../assets/logos/nav-icon1.svg'
import navicon2 from '../assets/logos/nav-icon2.svg'
import navicon3 from '../assets/logos/nav-icon3.svg'



function NavBar() {

  const [activeLink , setActiveLink] = useState("home")
  const [isscrolling , setIsScrollIng] = useState(false)


  useEffect(() => {
    function scrolling(){
      setIsScrollIng((window.scroll > 50) ? false : true)
    }

    window.addEventListener("scroll" , scrolling)

    return () => {
      window.removeEventListener("scroll" , scrolling)
    }
  } , [])

  function updateactivelinks(link){
    setActiveLink(link)
  }




  return (
  /*<Navbar expand="lg" className={isscrolling ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt='Logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar' : 'navbar-link'} onClick={() => updateactivelinks('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'home' ? 'active-navbar' : 'navbar-link'} onClick={() => updateactivelinks('skills')}>Skills</Nav.Link> 
          <Nav.Link href="#projects" className={activeLink === 'home' ? 'active-navbar' : 'navbar-link'} onClick={() => updateactivelinks('projects')}>projects</Nav.Link> 
        </Nav>
        <span className='navbar-txt'>
          <div className='social-icons'>
            <a href=""><img src={navicon1} alt="" /></a>
            <a href=""><img src={navicon2} alt="" /></a>
            <a href=""><img src={navicon3} alt="" /></a>
          </div>
          <button className='contact-btn'><span>Cotact us</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>*/
  <nav className={isscrolling ? "scrolled" : ""} id='navbar'>
    <div className='container'>
            <a class="navbar-brand" href="#home">
                <img src={logo} alt="Logo"/>
            </a>
            <button class="navbar-toggler-icon" type="button" aria-controls="navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
      <div className='navbar-collapse'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className={activeLink === 'home' ? 'active-navbar' : 'nav-link'} href="#home" onClick={() => updateactivelinks('home')}>home</a>
          </li>
          <li className='nav-item'>
            <a className={activeLink === 'skills' ? 'active-navbar' : 'nav-link'} href="#skills" onClick={() => updateactivelinks('skills')}>skills</a>
          </li>
          <li className='nav-item'>
            <a className={activeLink === 'projects' ? 'active-navbar' : 'nav-link'} href="#projects" onClick={() => updateactivelinks('projects')}>projects</a>
          </li>
        </ul>
        <button className='sign-btn'><span>sign in/up</span></button>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
