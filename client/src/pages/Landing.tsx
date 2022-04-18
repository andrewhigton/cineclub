import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Films from '../components/films/Films';
import Footer from '../components/footer/Footer';
import { loadFilms } from '../actions/film';
import FilmCarousel from '../components/carousel/Carousel';

interface LandingProps {
	isAuthenticated: boolean;
	loadFilms: () => void;
	film: {films};
	films: Array<string>;
}

const Landing: React.FC<LandingProps> = ({ 
	isAuthenticated, 
	loadFilms,
	film: {films} 
	}) => {
	  useEffect(() =>  {
    	loadFilms();	
	  	}, [loadFilms]);
	 
	return (
		<section>
	      <div className="carousel">
		    <FilmCarousel/>	          
	       </div>
	       <div >
			<Films/>	       	
	       </div>
	      <Footer/> 
	    </section>
		)
	}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  film: state.film
});

export default connect(mapStateToProps, { loadFilms })(Landing);