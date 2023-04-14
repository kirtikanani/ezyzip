


import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"


const Register = () => {

  const signupNameRef = useRef()
  const signupPasswordRef = useRef()
  const signEmailRef = useRef()

  const submitHandler = e=>{
    e.preventDefault()
  }

  return <Helmet title='Signup'>
    <CommonSection title='Signup' />
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center mt-5 mb-5'>
            <form className='form_group mb-5' onSubmit={submitHandler}>
              <div>
                <input type='text' placeholder='Full Name' required ref={signupNameRef} />
              </div>
              <div>
                <input type='email' placeholder='Email' required ref={signEmailRef} />
              </div>
              <div>
                <input type='password' placeholder='Password' required ref={signupPasswordRef} />
              </div>
              <button type='submit' className='addTOCart_btn mt-5'>Sign Up</button>
            </form>
            <Link to="/login">
                Already have an account? Login</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Register

