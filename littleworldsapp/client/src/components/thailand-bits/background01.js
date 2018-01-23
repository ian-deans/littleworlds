import React from "react";
import InlineSVG from 'react-inlinesvg';
import './background01.css';

const Background01 = props => (
<div className="mountains">
    <InlineSVG
        src={props.imageUri}
    />
</div>
);




export default Background01