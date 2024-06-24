"use client";

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const MainComponent = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scrollHeader = () => {
                const header = document.getElementById('header');
                if (window.scrollY >= 100) {
                    header.classList.add('scroll-header');
                } else {
                    header.classList.remove('scroll-header');
                }
            };
            window.addEventListener('scroll', scrollHeader);


            const scrollUp = document.getElementById('scrollup');
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 200) {
                    scrollUp.classList.add('scrollup--show');
                } else {
                    scrollUp.classList.remove('scrollup--show');
                }
            });

            const sr = ScrollReveal({
                distance: '60px',
                duration: 2800,
                reset: false,
            });

            sr.reveal('.home--data, .home--social-link, .home--info, .discover--container, .place--container, .experience--data, .experience--overlay, .sponsor--content, .footer--data, .footer--rights', {
                origin: 'top',
                interval: 100,
            });

            sr.reveal('.about--data, .video--description, .subscribe--description', {
                origin: 'left',
            });

            sr.reveal('.about--img-overlay, .video--content, .subscribe--form', {
                origin: 'right',
                interval: 100,
            });
        }
    }, []);

    return null;
};

export default MainComponent;
