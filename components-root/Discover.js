"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const Discover = () => {
    return (
        <section className="place section" id="place">
            <h2 className="section--title">
                Discover the most <br /> attractive place
            </h2>

            <div className="place--container container swiper">
                <Swiper
                    modules={[EffectCoverflow, Autoplay]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={2} // Reduced space between slides
                    speed={2000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="place--card">
                            <img src="/img/kishtwar.jpg" alt="Discover 1" className="place--img" />
                            <div className="place--data">
                                <h2 className="place--title">Kishtwar</h2>
                                <span className="discover--description">24 tours available</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="place--card">
                            <img src="/img/ladakh.jpg" alt="Discover 2" className="place--img" />
                            <div className="place--data">
                                <h2 className="place--title">Ladakh</h2>
                                <span className="discover--description">15 tours available</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="place--card">
                            <img src="/img/vaishno-devi.jpg" alt="Discover 3" className="place--img" />
                            <div className="place--data">
                                <h2 className="place--title">Vaishnodevi</h2>
                                <span className="discover--description">19 tours available</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="place--card">
                            <img src="/img/manali.jpg" alt="Discover 4" className="place--img" />
                            <div className="place--data">
                                <h2 className="place--title">Manali</h2>
                                <span className="discover--description">48 tours available</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <style jsx>{`
                .place--container {
                    width: 50%;
                    max-width: 1200px;
                    max-height: 800px
                    margin: 0 auto;
                }

                .place--card {
                    position: relative;
                    overflow: hidden;
                    height: 300px;
                }

                .place--img {
                    width: 100%;
                    height: auto;
                    max-height: 500px;
                    object-fit: cover;
                }

                .place--data {
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 10px;
                    border-radius: 5px;
                    color: #fff;
                }

                .place--title {
                    font-size: 1.5rem;
                    margin: 0;
                }
                
                .discover--description {
                    font-size: 1rem;
                }
            `}</style>
        </section>
    );
}

export default Discover;
