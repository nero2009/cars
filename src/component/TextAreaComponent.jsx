import React from 'react';

const TextAreaComponent = (props) => {
    return (
        <div>
            <label className="control-label">{props.label}</label>
            <textarea className="form-control" name={props.name} type={props.type} id={props.id} value={props.value} onChange={props.handleChange}/> 
        </div>
    );
};

export default TextAreaComponent;