import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FormContainer } from './stripe-button.styles';
import { stripePayment } from '../../actions/film';
// import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentButton, PaymentFormContainer } from './stripe-button.styles';
import axios from 'axios';


const StripeCheckoutButton = () => {

const stripe = useStripe();
const elements = useElements();
let currentUser = 'bob';
const [isProcessingPayment, setIsProcessingPayment] = useState(false)


const paymentHandler = async (e) => {
  	

	e.preventDefault();
	if(!stripe || !elements) {
		return;
	}

	try  {
	const response = await axios.post('http://localhost:5000/api/film/payment') 
	
		const clientSecret = response.data;
 
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Andrew Higton',
        },
      },
    });
    
    if(paymentResult.paymentIntent.status === 'succeeded') {
    	alert('payment success');
    }
    
    setIsProcessingPayment(false);	

		} catch (err) {
		  alert(err);
	}

}


	return (

			<div> 
				<PaymentFormContainer>
      		<FormContainer onSubmit={paymentHandler}>
	        	<h2>Credit Card Payment:</h2>
	        	<CardElement />
	        <button disabled={isProcessingPayment}>Pay Now</button>
	      </FormContainer>
    		</PaymentFormContainer>
			</div>
		 )
}

export default StripeCheckoutButton;


			{/*<form>
				<CardElement />
				<h2>Credit card payment</h2>
				<button onSubmit={paymentHandler}>Pay Now</button>
			</form>*/}




// import React from 'react';

// import { loadStripe } from '@stripe/stripe-js';
// import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router-dom';
// // import StripeCheckout from 'react-stripe-checkout';
// import { ticketType, filmType } from '../componentTypes/componentTypes';
// import { updateFilm } from '../../actions/film';
// import { updateUserTickets } from '../../actions/auth';
// import axios from 'axios';

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

// const StripeCheckoutButton: JointStripeProps = ({ 
// 		price, 
// 		filmData, 
// 		ticketData, 
// 		updateFilm, 
// 	  updateUserTickets,
// 		history, 
// 		// location 
// 	}) => {


// 			const priceForStripe = price * 100;
// 			// const publishableKey = 'pk_test_uccgS5cz3BgmQJF5Jpfi3zhe';			
			
// 			const onToken = token => {
// 			if(isNaN(priceForStripe) || priceForStripe < 1) {
// 				alert('Please add tickets before submitting');	
// 				return; 
// 			}

			
// 			axios(
// 			{ 
// 				url: '/api/film/payment', 
// 				method: 'post',
// 				data: {
// 					amount: priceForStripe,
// 					token: token
// 				}
// 			 }, onPayment())
// 			.then(response => {
// 				console.log('resp is ' + response)
// 			 	// alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked');	
// 			 	history.push('/film/dashboard');
// 			 	//window.location.replace('http://localhost:3000/film/dashboard');
// 			 })
// 			.catch(error => {
// 				// console.log('Payment error: ', JSON.parse(error)); 	
// 				// console.log('Payment error: ' + error); 	
// 			 	alert('Payment error. Please use the provided credit card details');	
// 			 }) 
// 	} 

//   	const onPayment = () => {
// 	    //prob need history in these two to complete
// 	    //solve other problems first
// 	    updateFilm(filmData);
// 	    updateUserTickets(ticketData);
//   	};

// 	return (
// 		<div 
// 		className='how-it-works stripe'>
// 		<StripeCheckout
// 		label='Pay now'
// 		name='Saturday Cinema Club'
// 		billingAddress
// 		shippingAddress
// 		description={`Your total is £{price}`}
// 		amount={priceForStripe}
// 		panelLabel='Pay now'
// 		token={onToken}
// 		stripeKey={publishableKey}
// 		//move this out into own file
// 		style={{'margin':'2vh 0vh 0vw -5vw'}}
// 		/>
// 		</div>
// 		)
// 	}

// const mapStateToProps = state => ({
//   film: state.film,
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps, { 
//   updateFilm, 
//   updateUserTickets 
// })(StripeCheckoutButton);