import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import AddPlaces from './components/AddPlaces/AddPlaces';
import Admin from './components/Admin/Admin';


function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/admin/addPlace'>
            <AddPlaces></AddPlaces>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
