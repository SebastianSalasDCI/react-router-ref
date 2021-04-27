import React from 'react'
import {
  Form,
  Button
} from 'react-bootstrap'

export default function FormLog({email,password,check,onChangeHandler,onSubmitHandler}) {
  return (
    <>
    <div className="formContainer bg-custom_light">
      <Form onSubmit={(e)=>{e.preventDefault(); onSubmitHandler()}}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={onChangeHandler} id="email" required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={onChangeHandler} id="password" required type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group>
          <Form.Check value={check} onChange={onChangeHandler} id="remember" type="checkbox" label="remember me" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
    </>
  )
    
    
}
