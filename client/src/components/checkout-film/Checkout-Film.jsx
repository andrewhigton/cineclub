import React, { useState, FormEvent } from 'react';

import { connect } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { ticketType, filmInterface, filmType } from '../componentTypes/componentTypes';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
// import { updateUserTickets } from '../../actions/auth';
import './checkoutfilm.css'

// interface ChildComponentProps extends RouteComponentProps<any> {
//   // history: any;
//   match: any;
//   location: any;
// }

// interface CheckoutFilmProps {
//   films: filmInterface;
//   // ticketData: ticketType 
//   // loading: boolean;
//   };
  
// type JointCheckoutFilmProps = ChildComponentProps & CheckoutFilmProps;


// interface filmTypeInterface {
//         _id: string,
//         user: string,
//         title: string,
//         date: string,
//         cinema: string,
//         image: string,
//         ticketPrice: string,
//         crowdfundTarget: number,
//         totalsoFar: number
//       };

// const CheckoutFilm: React.FC<JointCheckoutFilmProps> = ({ 
  const CheckoutFilm = ({ 
    films: {film, loading}, 
    films,
    match, 
    // updateUserTickets,
    history,
  }) => {


  // let filmInfo = {
    // let _id = film._id
    // let user = film.user
    // let title = film.title
    // let date = film.date
    // let cinema = film.cinema
    // let image = film.image
    // let ticketPrice = film.ticketPrice
    // let crowdfundTarget = film.crowdfundTarget
    // let totalsoFar = film.totalsoFar
  //}


  // const [filmData, setFilmData] = useState<filmType>({
    const [filmData, setFilmData] = useState({
    _id: film._id,
    user: film.user,
    title: film.title,
    date: film.date,
    cinema: film.cinema,
    image: film.image,
    ticketPrice: film.ticketPrice,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar
  });

  let [bookingCost, setBookingCost] = useState(0);

  const [ticketData, setTicketData] = useState({
    // const [ticketData, setTicketData] = useState<ticketType>({
    title: film.title,
    ticketPrice: film.ticketPrice,
    date: film.date,
    cinema: film.cinema,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar,
    numberOfTickets: 0,
    cost: 0
  });
    
  // const onChange = (e: FormEvent<HTMLFormElement>) => {   
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
  if(filmData === null) return; 
  return (
      <>
      <div className='checkout-page'>
          <div>
            <span>Film: {film.title}</span>
          </div>
          <div>
            <span>Date: {film.date} </span>
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
        
        <form className="form">
          <div className="form-ticket">   
            <input
              type='number'
              min='0'
              placeholder='Enter number of tickets'
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
          <div>
            <span> 
              <StripeCheckoutButton
               filmData={filmData}
               ticketData={ticketData}
               price={bookingCost} 
               // {...props}
               // history={history}
               />
            </span>
            <div>
            <Link className='checkout-button btn btn-back' to='/film/dashboard'>Go Back
            </Link>
            </div>
          </div>
          </div>
        </>
  )
}

const mapStateToProps = state => ({
  films: state.film
});

export default connect(mapStateToProps, { 
  // updateUserTickets 
})(withRouter(CheckoutFilm));