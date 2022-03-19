import React from 'react';
import { ticketType } from '../componentTypes/componentTypes';
import './Tickets.css';
import '../../App.css'

interface TicketProps {
    ticket: ticketType
}


const Ticket: React.FC<TicketProps> = ({ ticket }) => {
const { title, 
		numberOfTickets,
		date,
		cost, 
		cinema, 
		crowdfundTarget, 
		totalsoFar
	} = ticket;

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
		      <p>Date: {date}</p>
		      
		      <p>Cinema: {cinema}</p>
		    </section>
		    <section className="ticket__section">
		      <h3> Crowdfund target</h3>
		      <p>Number sold: {totalsoFar}</p>
		      <p>Needed: {crowdfundTarget}</p>
		      <p>Number of tickets: {numberOfTickets}</p>
		    </section>
		  </div>
		  <footer className="ticket__footer">
		    <h3>Total: £{cost}</h3>
		    <span></span>
		  </footer>
		</article>
      </div> 
    )
  }  
      
export default Ticket;