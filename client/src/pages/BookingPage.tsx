import React, { Fragment, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { filmInterface, ChildComponentProps } from '../components/componentTypes/componentTypes';
import { getFilmById, updateFilm } from '../actions/film';
import CheckoutFilm from '../components/checkout-film/Checkout-Film'

interface BookingProps {
	updateFilm: () => void;
	getFilmById: (id) => void;
	filmBooking: filmInterface;
}

type JointBookingProps = ChildComponentProps & BookingProps; 

const BookingPage: React.FC<JointBookingProps> = ({
	// updateFilm,
	getFilmById,
	filmBooking: {film, loading},
	match,
	history
}) => { 
	useEffect(() => {
		getFilmById(match.params.id)
	}, []);
	
	return (
		<Fragment>
			<div>
			{film ? <CheckoutFilm/> : <p>please wait</p> }
			</div>
		<div className='checkout-page'>
          * Please use the following test credit card for payments  
          <br />
          4242 4242 4242 4242 - Exp 01/21 - CVV: 123
        </div>
        </Fragment>
		)
	};


const mapStateToProps = state => ({
	filmBooking: state.film
});

export default connect(mapStateToProps, { getFilmById  })(
	withRouter(BookingPage)
);