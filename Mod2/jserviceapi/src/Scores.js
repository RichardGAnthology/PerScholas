import React, {Component} from 'react'


class Scores extends Component {

    render(){
        return (
            <div> 
                <div className ="words">
                    <button className = "increase" onClick ={this.props.increase}> Increase  </button>
                </div>

                <div>
                    <button className = "decrease" onClick ={this.props.decrease}> Decrease </button>
                </div>
            </div>
             )
        }
    }

export default Scores
