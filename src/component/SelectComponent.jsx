import React from 'react';

const generateSelect =(props)=>{
    console.log(props)
    if(props.selectValues){
        return(
            <div>
                <label className="control-label">{props.label}</label>
                <select className="form-control" name={props.name} id={props.id} value={props.value} onChange={props.handleChange}>
                    {props.selectValues.map((item,index)=>
                        <option  value={item.value}>{item.name}</option>
                    )}
                </select>
            </div>
        )
    }
}
const SelectComponent = (props) => {
    
    return (
        <div>
            {generateSelect(props)}
        </div>
    );
};

export default SelectComponent;