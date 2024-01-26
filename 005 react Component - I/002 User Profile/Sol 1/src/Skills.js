// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import { Component } from "react";
import "./styles.css";

class Skills extends Component{
    render(){
        return (
                <ul type = 'none'>
                <li className="cl-cyan">HTML</li>
                <li className="cl-cyan">CSS</li>
                <li className="cl-cyan">JavaScript</li>
                <li className="cl-cyan">React</li>
                <li className="cl-cyan">Node</li>
                </ul>
        );
    }
}

export default Skills;