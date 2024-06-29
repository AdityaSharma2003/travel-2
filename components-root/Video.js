// "use client";

// import React, { useRef, useState, useEffect } from 'react';

// const Video = () => {
//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const handleVideoPlayPause = () => {
//         const video = videoRef.current;

//         if (video.paused) {
//             video.play().then(() => {
//                 setIsPlaying(true);
//             }).catch(error => {
//                 console.error("Error playing video:", error);
//             });
//         } else {
//             video.pause();
//             setIsPlaying(false);
//         }
//     };

//     useEffect(() => {
//         const video = videoRef.current;

//         const handleVideoEnd = () => {
//             setIsPlaying(false);
//         };

//         video.addEventListener('ended', handleVideoEnd);

//         return () => {
//             video.removeEventListener('ended', handleVideoEnd);
//         };
//     }, []);

//     return (
//         <section className="video section">
//             <h2 className="section--title">Video Tour</h2>

//             <div className="video--container container">
//                 <p className="video--description">
//                     Find out more with our video of the most beautiful and pleasant places for you and your family.
//                 </p>

//                 <div className="video--content">
//                     <video id="video-file" ref={videoRef}  className="video-element">
//                         <source src="/video.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>

//                     <button
//                         className="button button--flex video--button"
//                         id="video-button"
//                         onClick={handleVideoPlayPause}
//                     >
//                         <i className={`ri-${isPlaying ? 'pause' : 'play'}-line video--icon`} id="video-icon"></i>
//                     </button>
//                 </div>
//             </div>
//             <style jsx>
//                 {`
                    
//                     .video--container {
//                         padding-top: 1.6rem;
//                         width: 100%; /* Ensure container takes full width */
//                         max-width: 1200px; /* Optional: Set a maximum width */
//                         margin: 0 auto; /* Center the container */
//                     }

//                     .video--description {
//                         text-align: center;
//                         margin-bottom: var(--mb-2-5);
//                     }

//                     .video--content {
//                         position: relative;
//                         width: 100%; /* Ensure content container takes full width */
//                     }

//                     .video--content video {
//                         width: 100%; /* Make the video full width */
//                         height: auto; /* Maintain aspect ratio */
//                     }

//                     .video--button {
//                         position: absolute;
//                         right: 1.6rem;
//                         transform: translate(0, -64%);
//                         padding: 1.6rem 2.4rem;
//                     }

//                     .video--icon {
//                         font-size: 1.92rem;
//                     }
//                 `}
//             </style> 
//         </section>
//     );
// };

// export default Video;


















"use client";

import React, { useState, useEffect } from 'react';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const iframe = document.querySelector('iframe');
            const player = new Vimeo.Player(iframe);

            player.on('play', () => {
                setIsPlaying(true);
            });

            player.on('pause', () => {
                setIsPlaying(false);
            });

            player.on('ended', () => {
                setIsPlaying(false);
            });

            document.getElementById('video-button').addEventListener('click', () => {
                player.getPaused().then((paused) => {
                    if (paused) {
                        player.play();
                    } else {
                        player.pause();
                    }
                });
            });
        };

        return () => {
            document.body.removeChild(script);
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
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/966963247?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;dnt=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="yourtouragent virtual tour"
                        >
                        </iframe>
                    </div>

                    <button
                        className="button button--flex video--button"
                        id="video-button"
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

                    .video--content iframe {
                        width: 100%; /* Make the video full width */
                        height: auto; /* Maintain aspect ratio */
                    }

                    .video--button {
                        position: absolute;
                        right: 0.75rem;
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
