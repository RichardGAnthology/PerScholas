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

        {checkMatch && <Success savedUsername={savedUsername}/>}
      </div>
    </div>
  );
}

export default Form;

