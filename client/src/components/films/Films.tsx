import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Film from './Film';
import '../../App.css';
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
	if (films === null) return null;
	return (
		
        	<div className="">
        	<div>
	    		<h2 className="all-screenings-title">Latest films</h2>
	    	</div>	
	    
	    	<div className="row justify-content-center">
		    	{films.slice(0,8).map((item, index) => {
					return <Film
					index={index}
					film={item}
					key={item._id}
		    		/>
	          	})
	           }        
            </div>
            <Link to='/film' className="view-all-link">
           		<p>View all</p>
           	</Link>
           </div>     
			)
		}

const mapStateToProps = state => ({
	film: state.film
});

export default connect(mapStateToProps)(Films);