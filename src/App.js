import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/timezones" >
          Timezones
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
