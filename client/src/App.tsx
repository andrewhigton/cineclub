import React, { Fragment, FunctionComponent, useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
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
import { ActionType } from './actions/types';
import { loadUser } from './actions/auth';
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
            {/*<PrivateRoute path='/api/film/:id' component={payment-intents} /> */}
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

{/*<Route path='/api/film/:id' element={<BookingPage authRoute="login" />}/>*/}