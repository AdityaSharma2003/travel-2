"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const Place = () => {
    return (
        <section className="place section" id="place">
            <h2 className="section--title">Choose Your Place</h2>

            <div className="place--container container swiper">
                <Swiper
                    modules={[EffectCoverflow, Autoplay]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={32}
                    speed={2000}
                    autoplay={{
                        delay: 1000, // 3 seconds
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0
                    }}
                >
                    {/* <!------------------------------ Place Card 1 --------------------------------> */}
                    <SwiperSlide>
                        <div className="place--card swiper-slide">
                            <img src="/img/vaishno-devi.jpg" alt="Place 1" className="place--img" />

                            <div className="place--content">
                                <div className="place--rating">
                                    <i className="ri-star-line place--rating-icon"></i>
                                    <span className="place--rating-number">5.0</span>
                                </div>

                                <div className="place--data">
                                    <div>
                                        <h3 className="place--title">Vaishnodevi</h3>
                                        <span className="place--subtitle">Jammu</span>
                                    </div>
                                    <span className="place--price">$1499</span>
                                </div>

                                <button className="button button--flex place--button">
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <!------------------------------ Place Card 2 --------------------------------> */}
                    <SwiperSlide>
                        <div className="place--card swiper-slide">
                            <img src="/img/srinagar.jpg" alt="Place 2" className="place--img" />

                            <div className="place--content">
                                <span className="place--rating">
                                    <i className="ri-star-line place--rating-icon"></i>
                                    <span className="place--rating-number">4.5</span>
                                </span>

                                <div className="place--data">
                                    <div>
                                        <h3 className="place--title">Srinagar</h3>
                                        <span className="place--subtitle">Kashmir</span>
                                    </div>
                                    <span className="place--price">$1499</span>
                                </div>

                                <button className="button button--flex place--button">
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <!------------------------------ Place Card 3 --------------------------------> */}
                    <SwiperSlide>
                        <div className="place--card swiper-slide">
                            <img src="/img/patnitop.jpg" alt="Place 3" className="place--img" />

                            <div className="place--content">
                                <span className="place--rating">
                                    <i className="ri-star-line place--rating-icon"></i>
                                    <span className="place--rating-number">4.7</span>
                                </span>

                                <div className="place--data">
                                    <div>
                                        <h3 className="place--title">Patnitop</h3>
                                        <span className="place--subtitle">Jammu</span>
                                    </div>
                                    <span className="place--price">$2450</span>
                                </div>

                                <button className="button button--flex place--button">
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <!------------------------------ Place Card 4 --------------------------------> */}
                    <SwiperSlide>
                        <div className="place--card swiper-slide">
                            <img src="/img/ladakh.jpg" alt="Place 4" className="place--img" />

                            <div className="place--content">
                                <span className="place--rating">
                                    <i className="ri-star-line place--rating-icon"></i>
                                    <span className="place--rating-number">4.7</span>
                                </span>

                                <div className="place--data">
                                    <div>
                                        <h3 className="place--title">Ladakh</h3>
                                        <span className="place--subtitle">Kashmir</span>
                                    </div>
                                    <span className="place--price">$3000</span>
                                </div>

                                <button className="button button--flex place--button">
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <!------------------------------ Place Card 5 --------------------------------> */}
                    <SwiperSlide>
                        <div className="place--card swiper-slide">
                            <img src="/img/doda.jpg" alt="Place 5" className="place--img" />

                            <div className="place--content">
                                <span className="place--rating">
                                    <i className="ri-star-line place--rating-icon"></i>
                                    <span className="place--rating-number">4.3</span>
                                </span>

                                <div className="place--data">
                                    <div>
                                        <h3 className="place--title">Doda</h3>
                                        <span className="place--subtitle">Jammu</span>
                                    </div>
                                    <span className="place--price">$1450</span>
                                </div>

                                <button className="button button--flex place--button">
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <style jsx>{`
                .place--container {
                    width: 70%;
                    max-width: 1200px;
                    max-height: 800px
                    margin: 0 auto;
                }

                .place--card {
                    position: relative;
                    overflow: hidden;
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

                .discover--subtitle {
                    font-size: 1rem;
                }
            `}</style>
        </section>
    );
}

export default Place;
