import React from 'react'
import DivTwo from './Div2'

class DivOne extends React.Component{
    constructor(props){
        super(props)
    }
    
 render(){
    return(
      <div>
         <DivTwo />
     </div>
        )
    }
}

export default DivOne