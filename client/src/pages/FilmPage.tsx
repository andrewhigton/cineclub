import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { filmInterface } from '../components/componentTypes/componentTypes';
import Footer from '../components/footer/Footer';
import { loadFilms } from '../actions/film';
import Film from '../components/films/Film';
import '../components/films/Films.css';


interface FilmPageProps {
	loadFilms: boolean;
	film: filmInterface;
}

const FilmPage = ({ 
	loadFilms,
	film: {films, loading} 
	}) => {

	useEffect(() =>  {
      loadFilms();  
  }, [loadFilms]);

	return (
		<Fragment>
        	<div className="all-screenings">
        	<div>
	    		<h2 className="all-screenings-title">All our screenings</h2>
	    	</div>	
	    	<div className="films-list">
	    	{films.map((item, index) => (
				<Film
				index={index}
				film={item}
				key={item._id}
	    		/>
          	))
           }
            </div>
           </div>
           <Footer/>
        </Fragment>    	
	)
}

const mapStateToProps = state => ({
	film: state.film
});

export default connect(mapStateToProps, { loadFilms })(FilmPage);