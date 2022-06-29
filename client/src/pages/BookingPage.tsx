import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { filmInterface, ChildComponentProps } from '../utils/componentTypes';
import { getFilmById } from '../actions/film';
import CheckoutFilm from '../components/checkout-film/Checkout-Film'

interface BookingProps {
	
	getFilmById: (id) => void;
	filmBooking: filmInterface;
	path: string,
	}

type JointBookingProps = ChildComponentProps & BookingProps; 

const BookingPage: React.FC<JointBookingProps> = ({

	getFilmById,
	filmBooking,
	match,
	location,
	history
}) => { 

	useEffect(() => {
		getFilmById(match.params.id)
	}, [getFilmById, match.params.id]);
	
	const { film } = filmBooking;

	return (
		<Fragment>
			<div>
				{ film ? <CheckoutFilm
					match={match}
					location={location}
					history={history}
				 /> : <p>please wait</p> }
			</div>
		<div className='checkout-page'>
          * Please use the following test credit card for payments  
          <br />
          4242 4242 4242 4242 - Exp 01/23 - CVV: 123
        </div>
        </Fragment>
		)
	};


const mapStateToProps = state => ({
	filmBooking: state.film
});

export default connect(mapStateToProps, { getFilmById  })(BookingPage);