import React, { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext"
import "./LogIn.css"

const LogIn = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState(""); 
  const {logIn} = useUserAuth();
  const navigate = useNavigate(); 
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email,password);
      navigate("/dasboard")
    }catch(err){
      setError(err.message)
    }
  };
  return (
    <div className="signup-component">
      <Card className="card">
        <Card.Body >
            <h2>Log In Page</h2>
            {error && <Alert>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
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
            </Form>
        </Card.Body>
      </Card>
      <Card  className="p-3  mt-3 text-center">
        <div>Don't have an account? <Link to="signup">Sign Up</Link></div>
      </Card>

    </div>
  )
}

export default LogIn;
