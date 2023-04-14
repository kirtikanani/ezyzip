

import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"


const Login = () => {

  const loginNameRef = useRef()
  const loginPasswordRef = useRef()

  const submitHandler = e=>{
    e.preventDefault()
  }

  return <Helmet title='Login'>
    <CommonSection title='Login' />
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center mt-5 mb-5'>
            <form className='form_group mb-5' onSubmit={submitHandler}>
              <div>
                <input type='email' placeholder='Email' required ref={loginNameRef} />
              </div>
              <div>
                <input type='password' placeholder='Password' required ref={loginPasswordRef} />
              </div>
              <button type='submit' className='addTOCart_btn mt-5'>Login</button>
            </form>
            <Link to="/register">
                Don't have an account? create an account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login
