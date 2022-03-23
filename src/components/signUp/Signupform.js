import React, { useContext } from "react";
import { LoginContext } from '../signUp/Auth';
import axios from 'axios'
import { Form, Button, Col, Row } from "react-bootstrap";

export default function Signupform() {
    const context = useContext(LoginContext);
    async function handelSubmit(event) {
        event.preventDefault()
        const obj = {
            "username": event.target.userName.value,
            "password": event.target.password.value,
            "phone": event.target.phone.value,
            "role": event.target.select.value,
        }
        await axios.post('https://home-bk.herokuapp.com/signUp', obj)

        context.login(event.target.userName.value, event.target.password.value)

    }
    return (
        <>
            
            <div className='login'>
            

                <Form className="foorm" onSubmit={handelSubmit} >
                    <Form.Group><img src='https://cengage.force.com/resource/1607465003000/loginIcon' width='100px' alt='pic'></img></Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="UserName" placeholder="Enter user name" name='userName' required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                        <Form.Text className="text-muted">
                            Never share your password with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        
                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone no." name='phone' required />

                        </Form.Group>
                    </Row>
                    <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select name='select' required>
                            
                            <option value='owner' >Owner</option>
                            <option value='admin'>admin</option>
                        </Form.Select>
                    </Form.Group>

                    <br />
                    <Button variant="primary" type="submit" style={{ margin: '0px 250px 0px 0px ' }}>
                        Sign Up
                    </Button>
                    Back to <a href="/" className="liink" >Login</a>
                </Form>

            </div>
        </>
    )
}

