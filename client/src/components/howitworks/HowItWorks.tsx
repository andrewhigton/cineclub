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
					<div className="how-it-works-text">
					<ul className='how-it-works-title'>Buying tickets for a screening another user has created</ul>
					<p></p>
					<ul>Browse our films, find one near you, book your tickets</ul>
					<ul>Once the required number of tickets are sold, the screening is confirmed and your card will be charged</ul>
					<ul className='how-it-works-title'>Create your own screening</ul>
					<p></p>
					<p></p>
					<ul>Book the film, date, time and place </ul>
					<ul>Buy your tickets </ul>
					<ul>Invite all your friends, advertise on Facebook etc.</ul>
					<ul>Once the screening reaches the required number of tickets, the screening is confirmed</ul>
					<p></p>
					<p></p>
	       			</div>
	       	</div>
	    </div>
	    
	    </section>
		)
	}

export default HowItWorks;