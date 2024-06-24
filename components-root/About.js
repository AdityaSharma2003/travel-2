"use client";

import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about--container container grid">
                <div className="about--data">
                    <h2 className="section--title about--title">
                        More Information <br /> About The Best Places in Jammu and Kashmir
                    </h2>
                    <p className="about--description">
                        You can find the most beautiful and pleasant places at the best prices with special discounts,
                        you choose the place we will guide you all the way to wait, get your place now.
                    </p>
                    <Link href="#place" className="button">Reserve a place</Link>
                </div>

                <div className="about--img">
                    <div className="about--img-overlay">
                        <img src="/img/about1.jpg" alt="About 1" className="about--img-one"/>
                    </div>

                    <div className="about--img-overlay">
                        <img src="/img/about2.jpg" alt="About 2" className="about--img-two" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;