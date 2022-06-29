import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Films from '../components/films/Films';
import { loadFilms } from '../actions/film';
import FilmCarousel from '../components/carousel/Carousel';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

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
			<Container>
					<section className="landing">
			      <div className="carousel">
							<FilmCarousel/>				    
			       </div>
			       <div >
							<Films />
			       </div>
			    </section>
	    </Container>
		)
	}


const mapDispatchToProps = (dispatch) => {
  return {
     loadFilms: () => dispatch(loadFilms()),
 
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  film: state.film
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
