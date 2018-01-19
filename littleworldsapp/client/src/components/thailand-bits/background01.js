import React from "react";
import InlineSVG from 'react-inlinesvg';
import './background01.css';

const Background01 = props => (

    <InlineSVG
        src={props.imageUri}
        className="mountains"
    />
    
);




export default Background01