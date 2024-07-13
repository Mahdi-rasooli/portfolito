import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/logos/contact-img.svg";


function Contact(){


  const[formDetails, setFormDetails] = useState({
                       firstName: '',
                       lastName: '',
                       email: '',
                       phone: '',
                       message: ''
  })

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  function handleFisrtName(event){
    setFormDetails(f => ({...f , firstName: event.target.value}))
  }

  function handlelasttName(event){
    setFormDetails(f => ({...f , lastName: event.target.value}))
  }  

  function handleEmail(event){
    setFormDetails(f => ({...f , email: event.target.value}))
  }

  function handlePhone(event){
    setFormDetails(f => ({...f , phone: event.target.value}))
  }

  function handleMessage(event){
    setFormDetails(f => ({...f , message: event.target.value}))
  }

  function handleFisrtName(event){
    setFormDetails(f => ({...f , firstName: event.target.value}))
  }
/*
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(event) => handleFisrtName(event)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(event) => handlelasttName(event)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(event) => handleEmail(event)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(event) => handlePhone(event)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(event) => handleMessage(event)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact