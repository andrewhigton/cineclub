import React, { Fragment  } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import NavbarComponent from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Landing from './pages/Landing';
import HowItWorks from './components/howitworks/HowItWorks';
import Dashboard from './pages/Dashboard';
import CreateFilm from './pages/CreateFilm';
import BookingPage from './pages/BookingPage';
import FilmPage from './pages/FilmPage';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

const App: React.FC = () => { 
  
  return (
     <Router> 
      <Fragment >
        <section className="container">
        <NavbarComponent  />
        <Route exact path='/' component={Landing} />          
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/film/' component={FilmPage} />
            <Route exact path='/howitworks' component={HowItWorks} />          
            
            <PrivateRoute path='/api/film/:id' component={BookingPage} /> 
            <PrivateRoute path='/film/dashboard' component={Dashboard}/>
            <PrivateRoute path='/create-film' component={CreateFilm} />
          </Switch>      
        </section>      
      </Fragment>
      <Footer/>    
    </Router> 
 );
}

export default App;