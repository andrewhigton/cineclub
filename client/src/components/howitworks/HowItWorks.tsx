import React from 'react';
import Footer from '../footer/Footer';
import '../../App.css';
import './howitworks.css';

const HowItWorks = () => {

	return (
		<section className="landing dark-overlay">
	      <div className="how-it-works">
				<h2>How crowdfunded cinema works</h2>
					<li>Buying for a screening someone has created</li>
					<p></p>
					<p>1) Browse our films, find one near you, book your tickets</p>
					<p>2) Once the required number of tickets are sold, the screening is confirmed and your card will be charged</p>
					<li>Create your own screening</li>
					<p></p>
					<p>1) Book the film, date, time and place </p>
					<p>2) Buy your tickets </p>
					<p>3) Invite all your friends, advertise on Facebook etc.</p>
					<p>4) Once the screening reaches the required number of tickets, the screening is confirmed</p>
					<p></p>
					<p></p>
	       </div>
	    <Footer />
	    </section>
		)
	}

export default HowItWorks;