import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Film from './Film';
import './Films.css';

interface FilmsProps {
	film: {
		films:Array<{
	        _id: number, 
		    title: string,
		    date: number,
		    filmtime: number,
		    cinema: string,
		    image: string,
		    ticketPrice: number,
		    crowdfundTarget: number,
		    totalsoFar: number
    		}>;
    	loading: boolean;
		};
	};

const Films: React.FC<FilmsProps> = ({ 
	film: {films, loading} 
	}) => {
	// console.log('films is ' + films)
	if (films === null) return null;
	return (
		
        	<div className="all-screenings">
        	<div>
	    		<h2 className="all-screenings-title">Latest films</h2>
	    	</div>	
	    	<div className="films-list">
	    	
	    	{films.slice(0,4).map((item, index) => {
				return <Film
				index={index}
				film={item}
				key={item._id}
	    		/>
          	})
           }
            </div>
            <Link to='/film' className="view-all-link">
           		{/*<p>View all >></p>*/}
           		<p>View all</p>
           	</Link>
           </div>
	)
}

const mapStateToProps = state => ({
	film: state.film
});

export default withRouter(connect(mapStateToProps)(Films));