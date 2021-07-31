import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
export default class Login extends Component {
  render() {
    return (
      <>
        <Form>
          <h3 className="login_label">Sign in your account</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <a href="https://www.google.com/" style={{ textDecoration: "none", paddingLeft: "100px" }}> Forgot your password?</a>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Check type="checkbox" label="Stay signed in for a week" />
          <Button variant="primary">Continue</Button>
          <a href="https://www.google.com.ua/maps/" style={{ textDecoration: "none", padding: "40px",display:"inline-flex" }}> Use single sign-on (Google) instead </a>

        </Form>
               
      </>
    )
  }
}
