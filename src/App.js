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
import NotFound from './components/NotFound/NotFound';
import AllBookings from './components/AllBookings/AllBookings/AllBookings';
import ManagePlaces from './components/MnagePlaces/MnagePlaces/MnagePlaces';


function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar/>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute exact path='/allBookings'>
            <AllBookings></AllBookings>
          </PrivateRoute>
          <PrivateRoute exact path='/myBookings/:id'>
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute exact path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/addPlace'>
            <AddPlaces></AddPlaces>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/managePlace'>
            <ManagePlaces></ManagePlaces>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/addGuide'>
            <AddGuide></AddGuide>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/guides/manageGuide'>
            <ManageGuide></ManageGuide>
          </PrivateRoute>
          <PrivateRoute exact path='/admin/guides/:id'>
            <GuideInfoUpdate></GuideInfoUpdate>
          </PrivateRoute>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
