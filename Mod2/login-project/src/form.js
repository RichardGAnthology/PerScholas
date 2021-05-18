import Success from './success';
import Failure from './failure';
import React, {useState} from 'react'

const Form = () => {

    

    return (
        <div>

        <form>
            <input input= "text" placeholder = "username" />
        </form>

            <Success />
            <Failure />
        </div>
    )
}

export default Form