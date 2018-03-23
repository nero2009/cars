import React, { Component } from 'react'
import Validator from 'input-validator-react'
import FormContainer from './FormContainer'



class ValidatorContainer extends Component {

    
    render () {
        return (
            <div>
                <Validator render={props =><FormContainer {...props}/>}/>
            </div>
        )
    }
}

export default ValidatorContainer