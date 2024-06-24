"use client";

import React from 'react';

const Subscribe = () => {
    return (
        <section className="subscribe section">
            <div className="subscribe--bg">
                <div className="subscribe--container container">
                    <h2 className="section--title subscribe--title">
                        Subscribe Our <br /> Newsletter
                    </h2>
                    <p className="subscribe--description">Subscribe to our newsletter and get a special 30% discount.</p>

                    <form action="" className="subscribe--form">
                        <input type="text" placeholder="Enter email" className="subscribe--input" />

                        <button className="button">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;