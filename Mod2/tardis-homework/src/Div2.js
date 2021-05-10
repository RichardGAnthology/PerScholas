import React from 'react'
import DivThree from './Div3'

class DivTwo extends React.Component {
    constructor(props){
        super(props)
}

render(){
    return(
        <div>
            <DivThree />
            <DivThree />
        </div>
        )
    }
}

export default DivTwo