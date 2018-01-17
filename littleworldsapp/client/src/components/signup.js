import React from "react";
import "./signup.css";
import { Card, Row, Input } from 'react-materialize';

const SignUp = props => (

    <Card className="Modal"
            actions={[<a href="#">Start Exploring</a>]}>
        <Row>
            <p>Text</p>
            <Input s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input type="email" label="Email" s={12} />
            <Input type="password" label="password" s={12} />
            <Input type="password" label="please re-type password" s={12} />
        </Row>
    </Card>
    
);

export default SignUp;
