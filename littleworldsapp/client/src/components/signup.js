import React from "react";
import "./signup.css";
import { Card, Row, Input } from 'react-materialize';
import SignupForm from './SignupForm'



const SignUp = props => {

    /*
    <Row>
        <p>Text</p>
        <Input s={6} label="First Name" />
        <Input s={6} label="Last Name" />
        <Input type="email" label="Email" s={12} />
        <Input type="password" label="password" s={12} />
        <Input type="password" label="please re-type password" s={12} />
    </Row>
    */
    
    return(

        <Card className="Modal">
            <SignupForm />
        </Card>
    )
};

export default SignUp;
