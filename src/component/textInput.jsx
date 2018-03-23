import React from 'react'
import PropTypes from 'prop-types'

const TextInput =(props)=>{
    console.log(props)
    TextInput.propTypes ={
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        handleChange:PropTypes.func.isRequired
    }
    return(
        <div>
            <label className="control-label">{props.label}</label>
            <input className="form-control" name={props.name} type={props.type} id={props.id} value={props.value} onChange={props.handleChange}/>
        </div>
    )
}

export default TextInput