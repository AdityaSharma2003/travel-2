"use client";

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer section">
        <div className="footer--container container grid">
            <div className="footer--content grid">
                <div className="footer--data">
                    <h3 className="footer--title">JKTravels</h3>
                    <p className="footer--description">
                        Travel you choose the <br /> destination, we offer you the <br /> experience.
                    </p>

                    <div className="footer--social-container">
                        <a href="https://www.facebook.com/jktravels" target="_blank" className="footer--social">
                            <i className="ri-facebook-box-fill"></i>
                        </a>

                        <a href="https://www.twitter.com/jktravels" target="_blank" className="footer--social">
                            <i className="ri-twitter-fill"></i>
                        </a>

                        <a href="https://www.instagram.com/jktravels" target="_blank" className="footer--social">
                            <i className="ri-instagram-fill"></i>
                        </a>

                        <a href="https://www.youtube.com/jktravels" target="_blank" className="footer--social">
                            <i className="ri-youtube-fill"></i>
                        </a>
                    </div>
                </div>

                <div className="footer--data">
                    <h3 className="footer--subtitle">About</h3>

                    <ul>
                        <li className="footer--item">
                            <a href="aboutus" className="footer--link">Our Story</a>
                        </li>

                        <li className="footer--item">
                            <a href="services" className="footer--link">Services</a>
                        </li>

                        <li className="footer--item">
                            <a href="blog" className="footer--link">News &amp; Blog</a>
                        </li>
                    </ul>
                </div>

                <div className="footer--data">
                    <h3 className="footer--subtitle">Company</h3>

                    <ul>
                        <li className="footer--item">
                            <a href="ourpeoples" className="footer--link">Team</a>
                        </li>

                        <li className="footer--item">
                            <a href="priceplaning" className="footer--link">Plan &amp; Pricing</a>
                        </li>

                        <li className="footer--item">
                            <a href="carriers" className="footer--link">Become a member</a>
                        </li>
                    </ul>
                </div>

                <div className="footer--data">
                    <h3 className="footer--subtitle">Support</h3>

                    <ul>
                        <li className="footer--item">
                            <a href="faqs" className="footer--link">FAQs</a>
                        </li>

                        <li className="footer--item">
                            <a href="support" className="footer--link">Support Center</a>
                        </li>

                        <li className="footer--item">
                            <a href="contact" className="footer--link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer--rights">
                <p className="footer--copy">&copy; 2022 JKTravels PVT LTD. All rigths reserved.</p>

                <div className="footer--terms">
                    <a href="termsandconditions" className="footer--terms-link">Terms &amp; Agreements</a>
                    <a href="privacypolicy" className="footer--terms-link">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
    );
}


export default Footer;