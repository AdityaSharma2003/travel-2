"use client";

import React from 'react';

const Sponsers = () => {
    return (
        <section className="sponsor section">
            <div className="sponsor--container container grid">
                <div className="sponsor--content">
                    <img src="/img/sponsors1.png" alt="Sponsor 1" className="sponsor--img" />
                </div>
                <div className="sponsor--content">
                    <img src="/img/sponsors2.png" alt="Sponsor 2" className="sponsor--img" />
                </div>
                <div className="sponsor--content">
                    <img src="/img/sponsors3.png" alt="Sponsor 4" className="sponsor--img" />
                </div>
                <div className="sponsor--content">
                    <img src="/img/sponsors4.png" alt="Sponsor 4" className="sponsor--img" />
                </div>
                <div className="sponsor--content">
                    <img src="/img/sponsors5.png" alt="Sponsor 5" className="sponsor--img" />
                </div>
            </div>
        </section>
    );
}

export default Sponsers;