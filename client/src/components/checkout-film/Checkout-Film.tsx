import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ticketType, filmInterface, filmType, ChildComponentProps } from '../../utils/componentTypes';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import './checkoutfilm.css'

interface CheckoutFilmProps {
  films: filmInterface;
  match:() => void;
  location:() => void;
  history: () => void;
  };

type JointCheckoutFilmProps = ChildComponentProps & CheckoutFilmProps

const CheckoutFilm: React.FC<JointCheckoutFilmProps> = ({ 
    films,
    history
    }) => {   

  const { film } = films;

  const [filmData, setFilmData] = useState<filmType>({
    _id: film._id,
    user: film.user,
    title: film.title,
    date: film.date,
    filmtime: film.filmtime,
    cinema: film.cinema,
    image: film.image,
    ticketPrice: film.ticketPrice,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar
  });

  let [bookingCost, setBookingCost] = useState<number>(0);

  const [ticketData, setTicketData] = useState<ticketType>({
    title: film.title,
    ticketPrice: film.ticketPrice,
    date: film.date,
    cinema: film.cinema,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar,
    numberOfTickets: 0,
    cost: 0
  });
    
   
    const onChange = (e) => {   
    let ticketsTotal = parseInt(e.target.value);
    let bookingTotal = parseInt(film.ticketPrice) * parseInt(e.target.value); 
    let totalTicketsBooked = film.totalsoFar + parseInt(e.target.value)
    setBookingCost(bookingTotal)
    setTotalSoFar(totalTicketsBooked);
    setTicketTotalSoFar(totalTicketsBooked, bookingTotal, ticketsTotal);

  }

  const setTotalSoFar = (totalTicketsBooked) => {
    setFilmData({...filmData, totalsoFar: totalTicketsBooked });
  }

  const setTicketTotalSoFar = (totalTicketsBooked, bookingTotal, ticketsTotal) => {
    setTicketData({...ticketData, 
     totalsoFar: totalTicketsBooked, 
     cost: bookingTotal,
     numberOfTickets: ticketsTotal });
  } 

  const moment = require('moment');
  const formatDate = moment(film.date)
  const formattedDate = formatDate.format('D MMMM YYYY');
 
  return (
      <>
      <div className='checkout-page'>
          <div>
            <span>Film: {film.title}</span>
          </div>
          <div>
            <span>Date: {formattedDate} </span>
          </div>
          <div className='header-block'>
            <span>Price: £{film.ticketPrice} </span>
          </div>
          <div className='header-block'>
            <span>Crowdfunding Target: {film.crowdfundTarget} </span>
          </div>
          <div 
          className='header-block'>
            <span>Tickets sold: {film.totalsoFar}</span>
          </div>
        
        <form className="checkout-form">
          <div>   
            <input
              className='checkout-tickets'
              type='number'
              min='0'
              placeholder='Number of tickets'
              name='tickets'
              onChange={e => onChange(e)}
              required
            />
          </div>  
        </form>
          <div>
            <span>Basket total: £{
              isNaN(bookingCost) ? 0 
              : bookingCost}
            </span>
          </div>
          <div className="">
              <span> 
                <StripeCheckoutButton
                  history={history}
                  filmData={filmData}
                  ticketData={ticketData}
                  price={bookingCost}
                 />
              </span>
          </div>
          <div>
            <Link className='go-back btn btn-back' to='/film/dashboard'>Go Back</Link>
          </div>
          </div>
        </>
  )
}

const mapStateToProps = state => ({
  films: state.film
});

export default connect(mapStateToProps)(CheckoutFilm); 

// const film = useSelector((state) => state.film.film)
// const loading = useSelector((state) => state.film.loading)
