import React,{useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import "./CreateAccount.css"
import { useUserAuth } from "../context/UserAuthContext"

const CreateAccount = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState(""); 
  const {signUp} = useUserAuth();
  const navigate = useNavigate(); 
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try {
      await signUp(email,password);
      navigate("/")
    }catch(err){
      setError(err.message)
    }
  };
  return (
    <div className="signup-component">
    <Card className="card">
      <Card.Body >
          <h2>Sign Up Page</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} />
              </Form.Group>
              <br />
              <Form.Group id="password">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>
              <Button type="submit">Create Account</Button>
          </Form>
      </Card.Body>
    </Card>
    <Card  className="p-3  mt-3 text-center">
      <div>Already have an account? <Link to="/">Log In</Link></div>
    </Card>
  </div>
)
}

export default CreateAccount;

