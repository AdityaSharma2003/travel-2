"use client";

import React from 'react';
import Link from 'next/link';

const BackToTop = () => {
    return (
        <Link href="#" className="scrollup" id="scrollup">
            <i className="ri-arrow-up-line scrollup--icon"></i>
        </Link>
    );
}

export default BackToTop