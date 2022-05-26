import React, { useState, FormEvent } from 'react';
import { CardElement, useStripe, useElements,  } from '@stripe/react-stripe-js';
import { StripeCardElement  } from '@stripe/stripe-js';
import { FormContainer } from './stripe-button.styles';
import { stripePayment } from '../../actions/film';
// import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentButton, PaymentFormContainer } from './stripe-button.styles';
import axios from 'axios';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card === null; 

const StripeCheckoutButton = ({price}) => {

const stripe = useStripe();
const elements = useElements();
let currentUser = 'bob';
const [isProcessingPayment, setIsProcessingPayment] = useState(false)

const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
  	
	e.preventDefault();
	if(!stripe || !elements) {
		return;
	}

	try  {
	const response = await axios.post('http://localhost:5000/api/film/payment') 
	
		const clientSecret = response.data;
 	
		const cardDetails = elements.getElement(CardElement)
		if(!ifValidCardElement(cardDetails)) return;


		if(cardDetails === null) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: 'Andrew Higton',
        },
      },
    });
    
    if(paymentResult?.paymentIntent?.status === 'succeeded') {
    	alert('payment success');
    }
    
    setIsProcessingPayment(false);	

		} catch (err) {
			if (err instanceof Error) {
		  alert(err.message);
			}
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