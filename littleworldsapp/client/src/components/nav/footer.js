import React from "react";
import "./footer.css";
import {Footer} from 'react-materialize';

const Bottom = props => (

    <Footer copyrights="&copy; 2018 Amy Almazar" className='footer'>
        <div className="col s12 offset-l6">
          <img src={props.imageUri} alt="logo 2"></img>
        </div>
    </Footer>
    
);

export default Bottom;
