import React from 'react'
import MailChimp from './MailChimp'
import { Container, Row , Col } from 'react-bootstrap'
import footerlogo from '../assets/logos/logo.svg'
import { Link } from 'react-router-dom'
import navicon1 from '../assets/logos/nav-icon1.svg'
import navicon2 from '../assets/logos/nav-icon2.svg'
import navicon3 from '../assets/logos/nav-icon3.svg'


function Footer() {

    const currentYear = new Date().getFullYear()


  return (
    <footer className='footer'>
        <Container>
            <Row className='custom-row'>
                <MailChimp/>
              <div className='row-design'>
                <Col sm={6} className='left-col'>
                    <img src={footerlogo} alt=''/>
                </Col>
                <Col sm={6} className='right-col'>
                    <div className='social-icons'>
                        {/*<Link to={''}><img src={navicon1} alt="" /></Link>
                        <Link to={''}><img src={navicon2} alt="" /></Link>
                        <Link to={''}><img src={navicon3} alt="" /></Link>*/}
                        <a href=""><img src={navicon1} alt="" /></a>
                        <a href=""><img src={navicon2} alt="" /></a>
                        <a href=""><img src={navicon3} alt="" /></a>
                    </div>
                    <p>&copy; {currentYear}. All rights reserved.</p>
                </Col>
              </div>  


            </Row>
        </Container>
    </footer>
  )
}

export default Footer