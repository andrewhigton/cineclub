import React, { useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import {  

	useStripe, 
	useElements, 
	CardNumberElement, 
	CardCvcElement, 
	CardExpiryElement  
} from '@stripe/react-stripe-js';
import { updateUserTickets } from '../../actions/auth';
import { updateFilm } from '../../actions/film';
import { ticketType, filmType } from '../../utils/componentTypes';
import Spinner from '../spinner/Spinner';
import '../checkout-film/checkoutfilm.css'
import axios from 'axios';


// const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card === null;  

interface TicketFilmTypes {
	filmData: filmType;
	ticketData: ticketType;
	price: number;
	updateUserTickets: (ticketDataForDispatch) => void; 
	updateFilm: (filmDataForDispatch) => void; 
	history;
}

//global vars for dispatch 
let useHistory;
let ticketDataForDispatch;
let filmDataForDispatch;

const StripeCheckoutButton: React.FC<TicketFilmTypes> = ({
	filmData, 
	ticketData, 
	price,
	updateUserTickets,
	updateFilm,
	history
	}) => {

const stripe = useStripe();
const elements = useElements();

let [isProcessingPayment, setIsProcessingPayment] = useState(false)

useHistory = history; 
ticketDataForDispatch = ticketData;
filmDataForDispatch = filmData;

const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {

	e.preventDefault();
	if(!stripe || !elements) {
		return;
	}

	isProcessingPayment = true;

	try  {
	const response = await axios.post('http://localhost:5000/api/film/payment', {
  amount: price,
	}
) 
	
		const clientSecret = response.data;

		const cardDetails = elements.getElement(CardNumberElement)
		

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
    	updateUserTickets(ticketDataForDispatch);
			updateFilm(filmDataForDispatch); 

    }
    
    setIsProcessingPayment(false);	

		} catch (err) {
			if (err instanceof Error) {
		  alert(err.message);
			}
		}
	}

	const inputStyle = {
      fontWeight: '1000',
      fontSize: '17px',
      lineHeight: '35px'
		}

	return isProcessingPayment ? (
		<Spinner />
		) : (
			<div className='checkout'>
				<h3>Card Payment</h3>
				<form onSubmit={paymentHandler}>
					<CardNumberElement 
					options={{
   					style: {
     					base: inputStyle,
				   },
				 }}
				 />
					<CardExpiryElement 
						options={{
	   					style: {
	     					base: inputStyle,
					   },
					 }}
					/>
					<CardCvcElement 
					options={{
   					style: {
     					base: inputStyle,
					   },
					 }}
					/>
					<button className='checkout-button' disabled={isProcessingPayment}>Pay Now</button>
				</form>
			</div>

		 )
	}

const mapDispatchToProps = (dispatch) => {
  return {
     updateUserTickets: () => dispatch(updateUserTickets(ticketDataForDispatch, useHistory)),
     updateFilm: () => dispatch(updateFilm(filmDataForDispatch)) 
  }
}

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);