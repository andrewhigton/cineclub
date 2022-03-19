import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../footer/Footer';
import { loadFilms } from '../../actions/film';
import DashboardTickets from './Dashboard-Tickets';
import DashboardFilms from './Dashboard-Films';;

const Dashboard = ({ 
  auth,
  auth: { user, loading }, 
  film: { films },
  loadFilms,
  history
  }) => {

  useEffect(() =>  {
      loadFilms();  
  }, [loadFilms]);

return ( 
        <Fragment>
          <div>
          <h2 className='welcome-message'>Welcome {user && user.name}</h2>
          </div>
          <div className="dashboard-display">
          <div className='tickets-films-block'>
          <h2 className='ticket-film-head'>Your tickets</h2>
          <DashboardTickets
          user={user}
          loading={loading}
           />
          </div>
          <div className='tickets-films-block'>
          <h2 className='ticket-film-head'>Your films</h2>
          <DashboardFilms
          user={user}
          films={films}
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