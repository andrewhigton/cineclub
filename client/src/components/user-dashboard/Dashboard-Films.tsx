import React, { Fragment } from 'react';
import Spinner from '../spinner/Spinner';
import Film from '../films/Film';
import { userType, filmsType } from '../../utils/componentTypes';
import '../../App.css';
import './Dashboard.css';

interface DashFilmsProps {
    films: filmsType;
    user: userType;
    filmLoading: boolean;
}

const DashboardFilms: React.FC<DashFilmsProps> = ({ user, films, filmLoading }) => {
    
  return (
     filmLoading && films === null ? <Spinner /> : 
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