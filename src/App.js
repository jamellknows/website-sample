import './App.css';
import Home from './pages/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignInPage from './pages/sign-in';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component ={Home} exact/>
        <Route path="/sign-in" component ={SignInPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
