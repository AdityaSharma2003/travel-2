"use client";

import React, { useRef, useState, useEffect } from 'react';

const Video = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoPlayPause = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Error playing video:", error);
            });
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnd = () => {
            setIsPlaying(false);
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <section className="video section">
            <h2 className="section--title">Video Tour</h2>

            <div className="video--container container">
                <p className="video--description">
                    Find out more with our video of the most beautiful and pleasant places for you and your family.
                </p>

                <div className="video--content">
                    <video id="video-file" ref={videoRef}  className="video-element">
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <button
                        className="button button--flex video--button"
                        id="video-button"
                        onClick={handleVideoPlayPause}
                    >
                        <i className={`ri-${isPlaying ? 'pause' : 'play'}-line video--icon`} id="video-icon"></i>
                    </button>
                </div>
            </div>
            <style jsx>
                {`
                    
                    .video--container {
                        padding-top: 1.6rem;
                        width: 100%; /* Ensure container takes full width */
                        max-width: 1200px; /* Optional: Set a maximum width */
                        margin: 0 auto; /* Center the container */
                    }

                    .video--description {
                        text-align: center;
                        margin-bottom: var(--mb-2-5);
                    }

                    .video--content {
                        position: relative;
                        width: 100%; /* Ensure content container takes full width */
                    }

                    .video--content video {
                        width: 100%; /* Make the video full width */
                        height: auto; /* Maintain aspect ratio */
                    }

                    .video--button {
                        position: absolute;
                        right: 1.6rem;
                        transform: translate(0, -64%);
                        padding: 1.6rem 2.4rem;
                    }

                    .video--icon {
                        font-size: 1.92rem;
                    }
                `}
            </style> 
        </section>
    );
};

export default Video;
