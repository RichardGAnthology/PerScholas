import React from "react";
import Password from './password.gif'

const Failure = (props) => {
  // function checkInput(){
  //     const newName=props.inputUsername
  //     const oldName=props.savedUsername
  //     const newPass=props.inputPassword
  //     const oldPass=props.savedPassword

  //     if(newName !== oldName || newPass !== oldPass){
  //         return "Failure!!"
  //     }
  // }

  return (
    <div>
      <p>Failure</p>
      <div>
        <img src = {Password} width = "300" alt = "wrong password"/>
      </div>
    </div>
  );
};

export default Failure;
