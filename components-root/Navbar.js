"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import {useTheme} from 'next-themes';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const profileRef = useRef(null);
    const { theme,setTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-theme');
        } else {
            setDarkMode(false);
            document.body.classList.remove('dark-theme');
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileRef]);

    const toggleTheme = () => {
        if (darkMode) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
        setTheme(theme==='dark'? 'light':'dark');
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    const toggleProfile = () => {
        setProfileVisible(!profileVisible);
    };

    const { user } = useUser();


    return (
        <header className="header" id="header">
            <nav className="glassmorphism nav">
                <div className='glassmorphism-yt-logo' style={{height: '60px'}}>
                    <img
                        alt=""
                        src="/ytalogo@2x.png"
                        style={{
                            height: '60px',
                            position: 'relative',
                            zIndex: '1',
                            height: '50px',
                            width: '60px',
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <div className={`nav--menu ${menuVisible ? 'show' : ''}`} id="nav-menu">
                    <ul className="nav--list" onClick={closeMenu}>
                        <li className="nav--item">
                            <Link href="/" className="nav--link active-link">Home</Link>
                        </li>
                        <li className="nav--item">
                            <Link href="/explore" className="nav--link active-link">Discover</Link>
                        </li>
                        <li className="nav--item">
                            <Link href="#place" className="nav--link active-link">Places</Link>
                        </li>
                        <li className="nav--item">
                            <Link href="/services" className="nav--link active-link">Services</Link>
                        </li>
                        <li className="nav--item">
                            <Link href="/blog" className="nav--link active-link">Blog</Link>
                        </li>
                        <li className="nav--item">
                            <div className="nav--dark" onClick={toggleTheme}>
                                <span className="change-theme-name">{darkMode ? 'Light mode' : 'Dark mode'}</span>
                                <i className={`ri-${darkMode ? 'sun' : 'moon'}-line change-theme-icon`} id="theme-btn"></i>
                            </div>
                        </li>
                        {!user && (
                            <li className="nav--item">
                                <a href="/api/auth/login" className="glassmorphism" style={{ color: darkMode ? 'white' : 'black', fontWeight: 'bold' }}>Login/Signup</a>
                            </li>
                        )}
                        {user && (
                            <li className="nav--item" ref={profileRef}>
                                <div className="profile" onClick={toggleProfile}>
                                    <img src={user.picture} alt={user.name} className="profile--icon" />
                                    <div className={`profile--dropdown ${profileVisible ? 'show' : ''}`}>
                                        <span className="profile--name">{user.name}</span>
                                        <a href="/api/auth/logout" className="profile--logout">Logout</a>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>

                    <i className="ri-close-line nav--close" id="nav-close" onClick={toggleMenu}></i>
                </div>

                <div className="nav--toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className="ri-function-line"></i>
                </div>

            </nav>
            <style jsx>
                {`
                    .profile {
                        position: relative;
                        display: inline-block;
                        cursor: pointer;
                    }

                    .profile--icon {
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        border: 2px solid white;
                        transition: transform 0.3s ease;
                    }

                    .profile--icon:hover {
                        transform: scale(1.1);
                    }

                    .profile--dropdown {
                        display: none;
                        position: absolute;
                        top: 50px;
                        right: 0;
                        background-color: white;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                        border-radius: 8px;
                        overflow: hidden;
                        z-index: 1000;
                        width: 200px;
                        transition: opacity 0.3s ease, transform 0.3s ease;
                        opacity: 0;
                        transform: translateY(-10px);
                    }

                    .profile--dropdown.show {
                        display: block;
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .profile--name {
                        display: block;
                        padding: 15px;
                        font-weight: bold;
                        color: black;
                        background-color: #f7f7f7;
                        text-align: center;
                    }

                    .profile--logout {
                        display: block;
                        padding: 15px;
                        text-align: center;
                        color: red;
                        text-decoration: none;
                        border-top: 1px solid #e0e0e0;
                        transition: background-color 0.3s ease;
                    }

                    .profile--logout:hover {
                        background-color: #f0f0f0;
                    }

                    .glassmorphism {
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        color: white;
                        padding: 10px 20px;
                        text-align: center;
                        transition: background 0.3s, border 0.3s;
                    }
                    .glassmorphism-yt-logo {
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: 10px;
                        border: 1px solid rgba(255, 255, 255, 0.5);
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        color: white;
                        padding: 10px 20px;
                        text-align: center;
                        transition: background 0.3s, border 0.3s;
                    }

                    .glassmorphism:hover {
                        background: rgba(255, 255, 255, 0.2);
                        border: 1px solid rgba(255, 255, 255, 0.5);
                    }
                `}
            </style>
        </header>
    );
}

export default Navbar;
