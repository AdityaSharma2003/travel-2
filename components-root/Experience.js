"use client";

import React from 'react';

const Experience = () => {
    return (
        <section className="experience section">
            <h2 className="section--title">
                With Our Experience <br /> We Will Serve You
            </h2>

            <div className="experience--container container grid">
                <div className="experience--content grid">
                    <div className="experience--data">
                        <h2 className="experience--number">15</h2>
                        <span className="experience--description">Year <br />
                            Experience</span>
                    </div>

                    <div className="experience--data">
                        <h2 className="experience--number">80</h2>
                        <span className="experience--description">Complete <br />
                            tours</span>
                    </div>

                    <div className="experience--data">
                        <h2 className="experience--number">750+</h2>
                        <span className="experience--description">Tourist <br />
                            Destinations In India</span>
                    </div>
                </div>

                <div className="experience--img grid">
                    <div className="experience--img-overlay">
                        <img src="/img/dal.jpg" alt="Experience 1" className="experience--img-one" />
                    </div>

                    <div className="experience--img-overlay">
                        <img src="/img/sayoj.jpg" alt="Experience 2" className="experience--img-two" />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .experience--data {
                        margin-right: 5rem; 
                    }

                    .experience--data {
                        margin: 0 2rem; 
                    }
                `}
            </style>
        </section>
    );
}

export default Experience;