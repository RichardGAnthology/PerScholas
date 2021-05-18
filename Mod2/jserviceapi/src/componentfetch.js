import React, {Component} from 'react'
import Scores from './Scores'

class componentfetch extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            question:"",
            answer:"",
            category:"",
            points:[],
            newScore: 0,
            showAnswer: false
            
        }
        this.updateData = this.updateData.bind(this)
        this.decrease = this.decrease.bind(this)
        this.increase = this.increase.bind(this)
        this.showAnswer = this.showAnswer.bind(this)
    }
    
        async componentDidMount(){
            
            const url ="http://jservice.io/api/random";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                question: data[0].question, 
                answer: data[0].answer,
                category: data[0].category.title,
                points: data[0].value
                
            });
    }
    
updateData(){
   //this.componentDidMount()
    let api = ("http://jservice.io/api/random")
    fetch(api)
    .then((response) => {
        return response.json()
    }).then((data) =>{
        
        this.setState({
            question: data[0].question, 
            answer: data[0].answer,
            category: data[0].category.title,
            points: data[0].value
            
        });;
    })

    this.setState({showAnswer:false})
}

decrease(){
    let num = this.state.newScore - 1
    this.setState({newScore: num })
}

increase(){
    let num = this.state.newScore+1
    this.setState({newScore: num})
}

showAnswer(){

this.setState({showAnswer: true})

}

    render(){
    return (
        <div>
            <div className="align">
                <div>
                    <h1 className="yellow">WELCOME T </h1>
                </div>

                <div className = "white">
                    <h1>O JEOPARDY!</h1>
                </div> 
            </div>

            <div className = "align">
                <div > 
                    <p className ="yellow" >Score: </p>
                </div>
                <div>
                    <p className = "white">{ this.state.newScore}</p>
                </div>
            </div>

            <div>
                <div>
                    <Scores increase = {this.increase} decrease = {this.decrease}/>
                </div>

                <div>
                    <h2>LETS PLAY!</h2>
                </div>
                <div>
                    <button className= "question" onClick ={this.updateData}>Random Trivia Question</button>
                </div>
                
                <div  className = "align"> 
                    <div>
                        <h3 className ="yellow"> Category:</h3>
                    </div>

                    <div className = "white">
                        <h3> {this.state.category}</h3>
                    </div>
                </div>

                <div className = "align"> 
                    <div>
                        <h3 className="yellow"> Points:</h3>
                    </div>

                    <div>
                        <h3 className= "white"> {this.state.points} </h3>
                    </div>
                </div>
                
                <div className= "align"> 
                    <div >
                        <h3 className="yellow">Question: </h3>
                    </div>
                    <div> 
                        <h3 className="white">{this.state.question}</h3>
                    </div>
                </div>

                <div onClick = {this.showAnswer}>
                    <h2>{this.state.showAnswer? this.state.answer: <div className = "blueBar">Click to Reveal Answer</div>} </h2>
                </div>
            </div>
        </div>
    )
}
}
export default componentfetch