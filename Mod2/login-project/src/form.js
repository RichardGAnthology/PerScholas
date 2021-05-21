import Success from "./success";
import Failure from "./failure";
// import React, {Component} from 'react'
// import React from 'react'
import React, { useState } from "react";

function Form() {
  //     name of key     this.set.state   this.state/name of value
  //     current state   function that updates current state
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [checkMatch, setCheckMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const savedUsername = "Richard";
  const savedPassword = "Gonzalez";

  function handleNameChange(event) {
    setInputUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setInputPassword(event.target.value);
  }

  function checkSuccessInput(event) {
    event.preventDefault();
    setIsLoading(true);
    if (savedUsername === inputUsername && savedPassword === inputPassword) {
      setCheckMatch(true);
    } else {
      setCheckMatch(false);
    }
  }

  return (
    <div>
      <form onSubmit={checkSuccessInput}>
        <label>
          Username:
          <input
            type="text"
            value={inputUsername}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            value={inputPassword}
            onChange={handlePasswordChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

      {/* next time add this part to App.js */}
      <div>
        {!checkMatch && isLoading && <Failure />}

        {checkMatch && <Success />}
      </div>
    </div>
  );
}

export default Form;

// class Form extends React.Component{
//     constructor(props){
//         super(props)

//         this.state={
//             savedUsername: "Richard",
//             savedPassword: "Gonzalez",
//             inputUsername:"",
//             inputPassword:"",
//             // test:""
//             //might need a boolean/ternary?
//         }
//         this.handleNameChange=this.handleNameChange.bind(this)
//         this.handlePasswordChange=this.handlePasswordChange.bind(this)
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }

//     handleNameChange(event){
//         this.setState({test: event.target.value})
//     }

//     handlePasswordChange(event){
//         this.setState({inputPassword: event.target.value})
//     }

//     handleSubmit(event){
//         this.handlePasswordChange()
//         this.handleNameChange()
//         event.preventDefault()

//     }

//     //things left to do:
//     //1. Make submit button send new values to states.
//     //2. Compare values of newly stored inputs. DONE
//     //3. if new values = old values success DONE
//     //4. if new values != old values failure DONE
// render(){
//     return (
//         <div>
//         <form onSubmit = {this.handleSubmit}>
//             <label>
//                 Username:
//                 <input type= "text" value ={this.state.inputUsername} onChange={this.handleNameChange}/>
//             </label>

//             <label>
//                 Password:
//                 <input type="text" value={this.state.inputPassword} onChange={this.handlePasswordChange}/>
//             </label>

//             <input type="submit" value="Submit"/>

//             <Success
//                 inputUsername = {this.state.inputUsername} savedUsername = {this.state.savedUsername}
//                 inputPassword = {this.state.inputPassword}  savedPassword = {this.state.savedPassword}
//             />

//             <Failure
//                 inputUsername = {this.state.inputUsername} savedUsername = {this.state.savedUsername}
//                 inputPassword = {this.state.inputPassword} savedPassword = {this.state.savedPassword}
//             />
//             </form>
//         </div>
//         )
//     }
// }
