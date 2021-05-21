import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Shop from "./shop";
import About from "./about";
import Nav from "./nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
