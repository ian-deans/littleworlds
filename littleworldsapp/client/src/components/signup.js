import React from "react";
import "./signup.css";
import { Card, Row, Input } from 'react-materialize';



const SignUp = props => {
    const handleSubmit = userObject => {
        
        // {/*actions={[<a href="http://localhost:3001/createuser"*/}
        
        fetch('http://localhost:3001/createuser', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(userObject)
        })
    }
    
    const submitButton = 
        <button onClick={() => handleSubmit({
            name: 'Dood', 
            password: 'funkymonkey'})}
        >
            Start Exploring
        </button>
    
    return(

    <Card className="Modal"
        actions={submitButton}
        >
        <Row>
            <p>Text</p>
            <Input s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input type="email" label="Email" s={12} />
            <Input type="password" label="password" s={12} />
            <Input type="password" label="please re-type password" s={12} />
        </Row>
    </Card>
    
)};

export default SignUp;
