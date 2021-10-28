import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';


function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path='/'>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
