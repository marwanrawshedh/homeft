import React, { Component } from 'react'
import './Header.css'
import { LoginContext } from '../signUp/Auth';



export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,

        };
    }
    static contextType = LoginContext;


    changeBackroung = () => {
        window.scrollY > 0
            ? this.setState({
                scrolling: true,
            })
            : this.setState({
                scrolling: false,
            });};

        componentDidMount = () => {
            window.addEventListener("scroll", this.changeBackroung);
        };
    
    render() {
        return (
            <div className={this.state.scrolling ? "header_active" : "header"}>
                <a href='/'> <h1> sell Home</h1></a>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/' onClick={this.context.logout}>Log Out</a>                </nav>
                    

            </div>
        )
    }
}

export default Header

