import React, { useState , useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'


function NewsLetter({ status , message , subscribe}) {
    const [email , setEmail] = useState('')


    useEffect(() => {
        if (status === 'success') clearFields();
      }, [status])

    


    function handleSubmit(event){
        event.eventDefault
        email &&
        email.indexOf("@") > -1 &&
        subscribe({
          EMAIL: email
        })
    }


    function clearFields(){
        setEmail('');
    }

    function handleChangeEmail(event){
        setEmail(event.target.value)
    }


  return (
    <Col lg={12}>
        <div className='newsletter-box'>
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Subscribe to have latest news</h3>
                    { status === 'error' && <Alert variant='danger'>{message}</Alert>}
                    { status === 'sending' && <Alert>sending...</Alert>}
                    { status === 'success' && <Alert variant='success'>{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className='new-email-box'>
                            <input type="email" placeholder='Email adress' value={email} onChange={(event) => handleChangeEmail(event)} />
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
  )
}

export default NewsLetter