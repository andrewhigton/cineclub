import React from 'react';
import { ticketType } from '../../utils/componentTypes';
import './Tickets.css';
import '../../App.css'

const moment = require('moment');

interface TicketProps {
    ticket: ticketType;
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
const { title, 
		numberOfTickets,
		date,
		filmtime,
		cost, 
		cinema, 
		crowdfundTarget, 
		totalsoFar
	} = ticket;

	const formatDate = moment(date)
	const formattedDate = formatDate.format('D MMMM YYYY');

  return (
      <div className="tickets">
        <article className="ticket">
		  <header className="ticket__wrapper">
		    <div className="ticket__header">
		    	<img src="/cine-ticket.jpeg" alt='' className="ticket-stub"/>
		  	</div>
		  </header>
		  <div className="ticket__divider">
		    <div className="ticket__notch"></div>
		    <div className="ticket__notch ticket__notch--right"></div>
		  </div>
		  <div className="ticket__body">
		    <section className="ticket__section">
		      <p>Film: {title}</p>
		      <p>Date: {formattedDate}</p>
		      <p>Time: {filmtime}</p>
		    
		      
		      <p>Cinema:</p>
		      <p>{cinema}</p>
		    </section>
		    <section className="ticket__section">
		      
		      <p>Number sold: {totalsoFar}</p>
		      <p> Crowdfund target: {crowdfundTarget}</p>
		      <p>Number of tickets: {numberOfTickets}</p>
		    </section>
		  </div>
		  <footer className="ticket__footer">
		    <p>Total: £{cost}</p>
		    <span></span>
		  </footer>
		</article>
      </div> 
    )
  }  
      
export default Ticket;