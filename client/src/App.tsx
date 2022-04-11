import React, { Fragment, FunctionComponent, useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import NavbarComponent from './components/navbar/Navbar';
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
import './App.css';


if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

const App: React.FC = () => { 

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('called app')
  //   // check for token in LS when app first runs
    // if (localStorage.token) {
      // if there is a token set axios headers for all requests
      // setAuthToken(localStorage.token);
    //}
  //   // try to fetch a user, if no token or invalid token we
  //   // will get a 401 response from our API
    dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) dispatch({ type: ActionType.LOGOUT });
  //   });
  }, []);


  return (
     <Router> 
      <Fragment >
        <NavbarComponent  />
        <Route exact path='/' component={Landing} />
        <section className="dark-overlay">
        
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/film/' component={FilmPage} />
            <Route exact path='/howitworks' component={HowItWorks} />          
            
            <PrivateRoute path='/api/film/:id' component={BookingPage} /> 
            <PrivateRoute path='/film/dashboard' component={Dashboard}/>
            <PrivateRoute path='/create-film' component={CreateFilm} />

            {/*<Route path='/api/film/:id' element={<PrivateRoute component={BookingPage} />} /> 
            <Route path='/film/dashboard' element={<PrivateRoute component={Dashboard} />} /> 
            <Route path='/create-film' element={<PrivateRoute component={CreateFilm} />} /> */}

          </Switch>
        </section>
      </Fragment>
    </Router> 
 );
}

export default App;

{/*<Route path='/api/film/:id' element={<BookingPage authRoute="login" />}/>*/}