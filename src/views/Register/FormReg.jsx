import React from 'react'
import {
    Form,
    Button,
    Alert
  } from 'react-bootstrap'
  
export default function FormReg({email,conf_email,alert_email,name,prof,password,alert_password,conf_password,onChangeHandler,onSubmitHandler}) {
    return (
    <div className="formContainer bg-custom_light">
      <Form onSubmit={(e)=>{e.preventDefault(); onSubmitHandler()}}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            required type="email" 
            placeholder="Enter email"
            id="email" 
            value={email}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Email address</Form.Label>
          <Form.Control 
            required type="email" 
            placeholder="Enter email"
            id="conf_email" 
            value = {conf_email}
            onChange={onChangeHandler}
          />
          {alert_email ? <Alert variant="danger"> Emails doesn't match </Alert> :null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            required type="text" 
            placeholder="Name"
            id="name"
            value= {name} 
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Profession</Form.Label>
          <Form.Control
            as="select"
            custom
            id="prof"
            value={prof}
            onChange={onChangeHandler}
          >
            <option value="0">Choose...</option>
            <option value="1">Student</option>
            <option value="2">Developer</option>
            <option value="3">Lawyer</option>
            <option value="4">Designer</option>
            <option value="5">Artist</option>
            <option value="6">Engineer</option>
            <option value="7">Teacher</option>
            <option value="8">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            required type="password" 
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            required type="password" 
            placeholder="Password"
            id="conf_password"
            value={conf_password}
            onChange={onChangeHandler}
          />
          {alert_password ? <Alert variant="danger"> Passwords doesn't match </Alert> :null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    )
}
