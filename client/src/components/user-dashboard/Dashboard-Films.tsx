import React, { Fragment } from 'react';
import Spinner from '../spinner/Spinner';
import Film from '../films/Film';
import { userType, filmsType } from '../componentTypes/componentTypes';
import '../../App.css';
import './Dashboard.css';

interface DashFilmsProps {
    films: filmsType;
    user: userType;
    loading: boolean;
}

const DashboardFilms: React.FC<DashFilmsProps> = ({ films, user, loading }) => {
    
  return (
     loading && films === null ? <Spinner /> : 
        <Fragment>
        <div className='your-films'>
        {films.map(item => (
             item.user === user._id ?  
             <div 
             key={item._id}>
             <Film
               film={item}
               index={item._id}
             />
             </div> : null
             ))}
        </div>
        </Fragment>
    )
  }  

export default DashboardFilms;