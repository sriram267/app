import React,{useState} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./login.css"
import { useUserAuth } from "../context/UserAuthContext"

const CreateAccount = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState(""); 
  const {signUp} = useUserAuth();
  const handleSubmit = async(e) => {
    e.preventDefaut();
    setError("")
    try {
      await signUp(email,password);
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
              <Form.Group id="password">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>
          </Form>
          <Button type="submit">Create Account</Button>
      </Card.Body>
    </Card>
    <Card  className="p-3  mt-3 text-center">
      <div>Already have an account? <Link to="/">Log In</Link></div>
    </Card>
  </div>
)
}

export default CreateAccount;

