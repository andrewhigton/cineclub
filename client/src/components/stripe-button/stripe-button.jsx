import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { ticketType, filmType } from '../componentTypes/componentTypes';
import { updateFilm } from '../../actions/film';
import { updateUserTickets } from '../../actions/auth';
import axios from 'axios';

// interface ChildComponentProps extends RouteComponentProps<any> {
//   history: any;
//   // match: any;
//   // location: any;
// }

// interface StripeProps {
// 		price: number; 
// 		filmData: filmType;
// 		ticketData: ticketType;
// 		updateFilm: (filmData) => void; 
// 	  updateUserTickets: (ticketData) => void;
// 	  // stripePayment:
// 	}

// type JointStripeProps = ChildComponentProps & StripeProps; 

const StripeCheckoutButton = ({ 
		price, 
		filmData, 
		ticketData, 
		updateFilm, 
	  updateUserTickets,
		// history, 
		// location 
	}) => {

	// console.log(price)
	// console.log(filmData)
	// console.log(ticketData)

			const priceForStripe = price * 100;
			const publishableKey = 'pk_test_GxoLwpaJRAn1kdTQGlL8EwZa00qqtVHbM3';
			
			const onToken = token => {
				// console.log(token)
			if(isNaN(priceForStripe) || priceForStripe < 1) {
				alert('Please add tickets before submitting');	
				return; 
			}

			// interface PayTypes {
			// 		url: string, 
			// 		method: string,
			// 		data: {
			// 			amount: number,
			// 			token: number
			// 		}
			// }
			
			axios(
			{ 
				url: '/api/film/payment', 
				method: 'post',
				data: {
					amount: priceForStripe,
					token: token
				}
			 }, onPayment())
			.then(response => {
				// console.log(response)
			 	// alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked');	
			 	window.location.replace('http://localhost:3000/film/dashboard');
			 })
			.catch(error => {
				// console.log('Payment error: ', JSON.parse(error)); 	
				console.log('Payment error: ' + error); 	
			 	alert('Payment error. Please use the provided credit card details');	
			 }) 
	} 

  	const onPayment = () => {
	    //prob need history in these two to complete
	    //solve other problems first
	    updateFilm(filmData);
	    updateUserTickets(ticketData);
  	};

	return (
		<div 
		className='how-it-works stripe'>
		<StripeCheckout
		label='Pay now'
		name='Saturday Cinema Club'
		billingAddress
		shippingAddress
		description={`Your total is £{price}`}
		amount={priceForStripe}
		panelLabel='Pay now'
		token={onToken}
		stripeKey={publishableKey}
		//move this out into own file
		style={{'margin':'2vh 0vh 0vw -5vw'}}
		/>
		</div>
		)
	}

const mapStateToProps = state => ({
  film: state.film,
  auth: state.auth
});

export default connect(
  mapStateToProps, { 
  updateFilm, 
  updateUserTickets 
})(StripeCheckoutButton);