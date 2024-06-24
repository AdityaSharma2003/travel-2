"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Homes = () => {
    return (
        <section className="home" id="home">
            <img src="/img/home1.jpg" alt="Jammu Kashmir" className="home--img" />

            <div className="home--container container grid">
                <div className="home--data">
                    <span className="home--data-subtitle">Discover your place</span>
                    <h1 className="home--data-title">
                        Explore The Paradise
                    </h1>
                    <Link href="#place" className="button">Explore</Link>
                </div>

                <div className="home--social">
                    <Link href="https://www.facebook.com/jktravels" target="_blank" className="home--social-link facebook ">
                        <FaFacebook />
                    </Link>
                    <Link href="https://www.instagram.com/travelling.jk" target="_blank" className="home--social-link instagram">
                        <FaInstagram />
                    </Link>
                    <Link href="https://twitter.com/travellingjk" target="_blank" className="home--social-link twitter">
                        <FaTwitter />
                    </Link>
                    <Link href="https://t.me/hakxcore_bot" target="_blank" className="home--social-link telegram">
                        <FaTelegram />
                    </Link>
                    <Link href="https://wa.me/+916006511429" target="_blank" className="home--social-link whatsapp">
                        <FaWhatsapp />
                    </Link>
                </div>

                <div className="home--info">
                    <div>
                        <span className="home--info-title">5 best place to visit</span>
                        <Link href="#place" className="button button--flex button--link home--info-button"> More <i
                                className="ri-arrow-right-line"></i> </Link>
                    </div>

                    <div className="home--info-overlay">
                        <img src="/img/home2.jpg" alt="Home 2" className="home--info-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homes;
