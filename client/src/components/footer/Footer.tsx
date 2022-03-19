import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
        return (
            <div className="footer">
                <div className="footer-link">
                    <Link to='/howitworks' className="contacts-link">About Saturday Cinema Club</Link>
                    <Link to='/howitworks' className="contacts-link">How it works</Link>
                    <Link to='/howitworks' className="contacts-link">Contact us</Link>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/" className="fa fa-facebook"><i className="fblink"></i></a>
    				<a href="https://twitter.com/home" className="fa fa-twitter"><i className="fblink"></i></a>		
    				<a href="https://www.youtube.com/" className="fa fa-youtube"><i className="fblink"></i></a>		
    				<a href="https://www.instagram.com/?hl=en" className="fa fa-instagram"><i className="fblink"></i></a>		
                </div>
            </div>
        );
    }

export default Footer;