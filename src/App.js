import Main from "./Components/Main/Main";
import Dashboard from "./Components/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className = "container-big">
    
      <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/Dashboard" component={Dashboard}/>
            
          </Switch>
      </Router>
    
    </div>

  );
}

export default App;
