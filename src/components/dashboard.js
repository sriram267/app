import React from 'react'
import { useUserAuth } from "./context/UserAuthContext";
import { Form, Button, Card } from 'react-bootstrap'

const Dashboard = () => {
  const {logOut} = useUserAuth();
  const handleClick = async() => {
    try {
      await logOut();
    }catch(err){
      console.log(err.message)
    }
  }
  const handleDownloadResume = () => {
    window.open("https://my-portfolio-sriram-vs.netlify.app/");
  };

  return (
    <div  style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"250px"}}>
      <Card>
          <Card.Body >
            <Form>
                <h1 style={{textAlign:"center"}}>HELLO WORLD</h1>
                <Button onClick={handleDownloadResume}>Portfolio website</Button>
                <Button onClick={handleClick}>LOG OUT</Button>
                
            </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Dashboard;
