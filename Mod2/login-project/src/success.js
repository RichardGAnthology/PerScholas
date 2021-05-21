import React from "react";
import Img from "./door.gif";

const Success = (props) => {
  
  return (
    <div>
      <p>Welcome, Richard!</p>
      <div className="Img">
        <img src={Img} width="500"  alt = "successful inputs"/>
      </div>
    </div>
  );
};

export default Success;
