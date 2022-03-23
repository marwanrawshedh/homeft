import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios'
import cookie from 'react-cookies';
import{  Form,Card,Button,Modal} from 'react-bootstrap'
import { LoginContext } from '../signUp/Auth';

function Owner(props) {
    const context = useContext(LoginContext);
    const[home,setHome]=useState([])
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(async () => {        
                
                const cookieToken = cookie.load('auth');        
                let config = {
                    method: 'get',
                    url: 'https://home-bk.herokuapp.com/getmyhome',
                    headers: {
                        'Authorization': `Bearer ${cookieToken}`
                    },
                    data: ''
                };
                let res = await axios(config)
                setHome(res.data)
                console.log(res.data);
            }, [])
          
        const handelSubmit=async(event)=>{{
          
            event.preventDefault()
        
            const object = {
                "flore": event.target.flore.value,
               "adress": event.target.adress.value,
               "date":event.target.date.value,
               "price": event.target.price.value,
               "ownernumber":event.target.phone.value,
            }
    
            let config = {
                method: 'post',
                url: 'https://home-bk.herokuapp.com/addhome',
                headers: {
                    'Authorization': `Bearer ${context.token}`
                },
                data: object
            };
            let res = await axios(config)
            setHome([...home, res.data])
            handleClose()
        }}
    return (
        <div>
<Button variant="primary" onClick={handleShow}style={{ marginTop: '5rem' }}>
        Add property
      </Button>
            {home.map((item)=>{return(<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>My Home</Card.Title>
    <Card.Text>
        <br></br>
    adress: {item.adress}<br></br>
Bulding Date: {item.date}<br></br>
Number Of Flore: {item.flore}<br></br>
My Phone: Number: {item.ownernumber}<br></br>
price: {item.price}<br></br>
status: {item.status}
    </Card.Text>
   
  </Card.Body>
</Card>
)})}  

      <Modal show={show} onHide={handleClose}>
      <form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>adress</Form.Label>
                        <Form.Control type="text" placeholder="Enter home adress" name='adress' required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Numbe Of Flore</Form.Label>
                        <Form.Control type="text" placeholder="Enter number of flores" name='flore' required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Owner Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" name='phone' required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" name='price' required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Bulding Date</Form.Label>
                        <Form.Control type="text" placeholder="Enter date of buliding" name='date' required />

                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
      </Modal>
        </div>
    );
}

export default Owner;