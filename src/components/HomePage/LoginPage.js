import React from "react";
import { Form,Button } from "react-bootstrap";


export default function LoginPage() {
    return (
        <>
        <div className="loginback"></div>
        <div className='login'>
           
           <Form className="foorm">
               <Form.Group><img src='https://cengage.force.com/resource/1607465003000/loginIcon' width='100px' alt='pic'></img></Form.Group>
               
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="UserName" placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
      Never share your password with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Button variant="primary" type="submit" style={{margin:'0px 50px 0px 0px'}}>
 Login
  </Button>

  <Button variant="primary" type="submit">
 Sign Up
  </Button>
  
</Form>
  
        </div>
        </>
    )
}



