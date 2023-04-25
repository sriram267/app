import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom"
import "./LogIn.css"
const LogIn = () => {
  return (
    <div className="signup-component">
      <Card className="card">
        <Card.Body >
            <h2>Log In Page</h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email"  />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
            </Form>
            <Button type="submit">Log In</Button>
            <div className="btn-bar"/>
            <div>
                  <GoogleButton
                   style={{
                    width: "100%",
                    marginTop: "20px",
                   }}
                  />
            </div>
        </Card.Body>
      </Card>
      <Card  className="p-3  mt-3 text-center">
        <div>Don't have an account? <Link to="signup">Sign Up</Link></div>
      </Card>

    </div>
  )
}

export default LogIn;
