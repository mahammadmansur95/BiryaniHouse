import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
