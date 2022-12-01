import React from 'react';
import '../../App.css';
import './howitworks.css';
import FilmCarousel from '../carousel/Carousel';

const HowItWorks = () => {

	return (
		<section className="landing dark-overlay">
		<div className="">
			<div className="carousel">
				<FilmCarousel/>				    
			</div>	
	      	<div className="how-it-works">
				<h2 className='how-it-works-title'>Crowdfunded cinema</h2>
					<ol className='how-it-works-text-title'> Buying tickets for a screening another user has created
					<div className="how-it-works-text">
						<li>Browse our films, find one near you, book your tickets</li>
						<li>Once the required number of tickets are sold, the screening is confirmed and your card will be charged</li>
					</div>
					</ol>
					<div >
					<ol className='how-it-works-text-title'>Create your own screening
					<div className="how-it-works-text">
						<li>Book the film, date, time and place </li>
						<li>Buy your tickets </li>
						<li>Invite all your friends, advertise on Facebook, Instagram, Twitter</li>
						<li>Once the screening reaches the required number of tickets, the screening is confirmed</li>
					</div>
					</ol>
					</div>
	       	</div>
	    </div>
	    
	    </section>
		)
	}

export default HowItWorks;