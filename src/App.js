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
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyBookings from './components/MyBookings/MyBookings';
import Footer from './components/Shared/Footer/Footer';


function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/myBookings/:id'>
            <MyBookings></MyBookings>
          </Route>
          <PrivateRoute exact path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
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
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
