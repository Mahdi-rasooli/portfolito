import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { ArrowUpRightCircle } from 'react-bootstrap-icons'
import headerimg from '../assets/logos/header-img.svg'

function Banner() {

  const toRotate = ['web developer', 'web designer', 'backend developer'];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 300;

  useEffect(() => {
    let changer = setInterval(() => {
      change();
    }, delta);

    return () => {
      clearInterval(changer);
    };
  }, [text, loopNum, isDeleting, delta]);

  function change() {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    if (isDeleting) {
      setText((prevText) => prevText.substring(0, prevText.length - 1));
    } else {
      setText((prevText) => fullText.substring(0, prevText.length + 1)
      );
    }

    if (!isDeleting && text === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prevNum) => (prevNum + 1) % toRotate.length);
      setDelta(300 - Math.random() * 100);
    }
  }


  return (
    <section className='banner'>
        <Container>
            <Row className='align-items-center'>
                <Col className='column1' xl={7} xs={12} md={6}>
                   <div className={"animate__animated animate__fadeIn"}>
                     <span className='tagline'>Welcome to my site</span>
                     <h1>{`Hi i'm Mahdi `}</h1>
                     <h1><span className='wrap'>{text}</span></h1><br/>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita, voluptates ut ullam ex eius provident voluptatibus ab rerum qui soluta natus atque odit aut magni eaque maiores inventore ad.</p>
                     <button>lets connect <ArrowUpRightCircle size={25}/></button>
                   </div>
                </Col>
                <Col xl={5} xs={12} md={6}>
                  <img src={headerimg} alt='' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner