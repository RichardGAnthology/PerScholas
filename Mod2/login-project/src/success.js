import React from "react";
import Img from "./door.gif";

const Success = () => {
  // const [username, setUsername] = useState('')

  // function checkUsername(){

  // }

  // function checkInput(){
  //     const newName=props.inputUsername
  //     const oldName=props.savedUsername
  //     const newPass=props.inputPassword
  //     const oldPass=props.savedPassword

  //     if(newName === oldName && newPass === oldPass){
  //         return "Success!!"
  //     }
  // }

  return (
    <div>
      <p>Success</p>
      <div className="Img">
        <img src={Img} width="500"  alt = "successful inputs"/>
      </div>
    </div>
  );
};

export default Success;
