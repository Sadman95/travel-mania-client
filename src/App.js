import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import AddPlaces from './components/AddPlaces/AddPlaces';
import Admin from './components/Admin/Admin';
import AddGuide from './components/AddGuide/AddGuide';
import ManageGuide from './components/UpdateGuide/ManageGuide';
import GuideInfoUpdate from './components/UpdateGuide/GuideInfoUpdate/GuideInfoUpdate';


function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/admin'>
            <Admin></Admin>
          </Route>
          <Route exact path='/admin/addPlace'>
            <AddPlaces></AddPlaces>
          </Route>
          <Route exact path='/admin/addGuide'>
            <AddGuide></AddGuide>
          </Route>
          <Route exact path='/admin/guides/manageGuide'>
            <ManageGuide></ManageGuide>
          </Route>
          <Route exact path='/admin/guides/:id'>
            <GuideInfoUpdate></GuideInfoUpdate>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
