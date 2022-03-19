import React, { Fragment, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../components/footer/Footer';
import { loadFilms } from '../actions/film';
import { userType, filmsType } from '../components/componentTypes/componentTypes';
import DashboardTickets from '../components/user-dashboard/Dashboard-Tickets';
import DashboardFilms from '../components/user-dashboard/Dashboard-Films';

interface ChildComponentProps extends RouteComponentProps<any> {
  history: any
}

interface DashboardProps {  
  auth: {
    user: userType,
    loading: boolean;
  };
    film: {
    films: filmsType,
      };
  loadFilms: () => void;
}

type JointDashboardProps = DashboardProps & ChildComponentProps;

const Dashboard: React.FC<JointDashboardProps> = ({ 
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
          loading={loading}
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