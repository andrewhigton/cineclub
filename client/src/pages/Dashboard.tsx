import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner'
import { loadFilms } from '../actions/film';
import { AuthProps, FilmProps } from '../utils/componentTypes';
import DashboardTickets from '../components/user-dashboard/Dashboard-Tickets';
import DashboardFilms from '../components/user-dashboard/Dashboard-Films';

interface ChildComponentProps extends RouteComponentProps<any> {
  history: any
}

interface DashboardProps {  
  auth: AuthProps,
  film: FilmProps,   
  loadFilms: () => void;
}

type JointDashboardProps = DashboardProps & ChildComponentProps;

const Dashboard: React.FC<JointDashboardProps> = ({ 
  auth: { user }, 
  film: { films, filmLoading },
  loadFilms,
  history
  }) => {

  useEffect(() =>  {
      loadFilms();  
  }, [loadFilms]); 

return (
  !user ? <Spinner />
  : <Fragment>    

          <div>
          <h2 className='welcome-message'>Welcome {user && user.name}</h2>
          </div>
          <div className="dashboard-display">
          <div className='tickets-films-block'>
          <h2 className='ticket-film-head'>Your tickets</h2>
          <DashboardTickets />
          </div>
          <div className='tickets-films-block'>
          <h2 className='ticket-film-head'>Your films</h2>
          <DashboardFilms
          user={user}
          films={films}
          filmLoading={filmLoading}
          />
          </div>
          </div>
          <Footer />

        </Fragment>
        
      ) 
}

const mapStateToProps = state => ({
 auth: state.auth,
 film: state.film,
});

export default connect(mapStateToProps, { loadFilms })(Dashboard);