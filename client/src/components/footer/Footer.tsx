import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
        return (
            <div className="footer">
                <div className="inner-footer">
                <div className="">
                    <div className="internal-links">
                        <div className="">
                            <Link to='/howitworks' className="about">About Cinema Club</Link>
                        </div>
                        <div className="">
                            <Link to='/howitworks' className="how">Contact us</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="social-links">
                        <div className="">
                            <a href="https://www.facebook.com/" className="fa fa-facebook"><i className="fblink"></i></a>
                            <a href="https://twitter.com/home" className="fa fa-twitter"><i className="fblink"></i></a>        
                            <a href="https://www.youtube.com/" className="fa fa-youtube"><i className="fblink"></i></a>        
                        </div>
                    </div>
                 </div>
            </div>
        );
    }

export default Footer;