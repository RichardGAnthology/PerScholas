
import './App.css';
import Groceries from './groceries'

function App() {
  return (
    <div> 
    <div className="App">
      <Groceries/>
    </div>
    <div className = "cartContainer">
    <img className = "cart" src="https://media2.giphy.com/media/USUSU09YIjFkW0uxIs/giphy.gif?cid=6c09b952k25bs1pugqcwbrlat9y26x6p34t3zjsyjyd4l28x&rid=giphy.gif"width="200px"/> 
    </div>
    <div className = "fruitContainer">
    <img className = "fruit" src="https://i.pinimg.com/originals/cc/52/3e/cc523e293444149956aa2a51623f9a3d.gif" width="200px"/> 
    </div>
    
    </div>
      
  );
}

export default App;
