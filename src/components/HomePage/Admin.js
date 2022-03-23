import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios'
import cookie from 'react-cookies';
import{ Card,Button} from 'react-bootstrap'
import { LoginContext } from '../signUp/Auth';
function Admin(props) {
    const context = useContext(LoginContext);
    const[otherHome,setOtherHome]=useState([])
    useEffect(async () => {        
                
                const cookieToken = cookie.load('auth');        
                let config = {
                    method: 'get',
                    url: 'https://home-bk.herokuapp.com/getallhome',
                    headers: {
                        'Authorization': `Bearer ${cookieToken}`
                    },
                    data: ''
                };
                let res = await axios(config)
                setOtherHome(res.data)
            }, [])

           const updateStatus=async(home,status)=>{

            
        
            
                 const object = {
                   ...home,
                   "status": status  ,           
                }
           
            
            
            let config = {
                method: 'put',
                url: `https://home-bk.herokuapp.com/updatehome/${object.id}`,
                headers: {
                    'Authorization': `Bearer ${context.token}`,
                    'Content-Type': 'application/json'
                },
                data: object
            };
            const res = await axios(config)
            const updatedHomeList = otherHome.map(home => {
                if (home.id !== res.data.id) { return home } else { return res.data }
            })
            setOtherHome(updatedHomeList)
            
            
            
    
        }
    

           
    return (
        <div>
            {otherHome.map((item)=>{return(<Card style={{ width: '18rem' }}>
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
  {item.status==="pending"&&<Button variant="danger" onClick={()=>{updateStatus(item,"rejected")}}>
        reject
      </Button>}
      {item.status==="pending"&&<Button variant="success" onClick={()=>{updateStatus(item,"approved")}}>
      approve
      </Button>}
</Card>
)})} 
        </div>
    );
}

export default Admin;