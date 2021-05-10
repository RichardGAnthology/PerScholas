//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Tardis from './tardis'
import DivOne from './Div1'
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <DivOne />
      </div>
    );
  }
}


export default App;
