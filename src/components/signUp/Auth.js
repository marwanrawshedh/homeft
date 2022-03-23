import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
// import base64 from 'base-64'
require('dotenv').config();

// const PORT = process.env.PORT
export const LoginContext = React.createContext();

class Auth extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            userName: null,
            role: null,
            token: null
        };
    }



    login = async (username, password) => {
        try {                       
            const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
            const authorization = `Basic ${encodedBase64Token}`;
            var data = '';
            var config = {
                method: 'post',
                url: `https://home-bk.herokuapp.com/signin`,
                headers: {
                    'Authorization': authorization
                },
                data: data
            };

            const response = await axios(config)       
              
            this.setLoginState(true, response.data.token, response.data.username, response.data.role);            


        } catch (error) {
            console.log(error.message);
        }

    }

    logout = () => {
        this.setLoginState(false, null, null,null);
    };

    validateToken = (token, role) => {
        
        
        try {
            let user = jwt.verify(token, 'secret');
            
          this.setLoginState(true, token, user, role);
        }
        catch (e) {
            this.setLoginState(false, null, null, null);
            console.log('Token Validation Error', e);
        }
    };

    setLoginState = (loggedIn, token, userName, role) => {
        
        this.setState({ loggedIn, token, userName, role });
        cookie.save('auth', token);
        cookie.save('role', role);
    };

    componentDidMount() {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const cookieRole = cookie.load('role');
        const token = qs.get('token') || cookieToken || null;
        const role = qs.get('token') || cookieRole || null;
        this.validateToken(token, role);
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

export default Auth;