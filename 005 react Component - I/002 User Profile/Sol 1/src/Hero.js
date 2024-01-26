// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";
import "./styles.css";

const name = 'Pranav Sharad Yeole';
const Email = 'pranav@google.com';
const Phone = ' 8546465544';
const address = ' ABC , xyz street'

class Hero extends Component{
    render(){
        return(
        <div className="hero" id="hero1">
            <h3>Name: {name}</h3>
            <p>Email: {Email}</p>
            <p>Phone: {Phone}</p>
            <p>Address: {address}</p>
        </div>
        );
    }
}

export default Hero;