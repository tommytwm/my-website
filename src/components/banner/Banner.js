/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Banner.css';

function Banner() {

    return (
        <div className="Banner">
            📢&nbsp; Support the &nbsp;
            <a 
                href="https://blacklivesmatters.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Black Lives Matter
            </a> 
            &nbsp; movement!
        </div>
    );
};

export default Banner;