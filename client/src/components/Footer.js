import React from  'react';
import {FaGithub} from 'react-icons/fa';
import './Footer.css';


function Footer() {

    return (
        <footer className='footer'>
            <p>© 2025 Sibhat Yosef</p>
            <a href="https://github.com/SibhatY/zenith-conditions" target="_blank" rel="noopener noreferrer"><FaGithub className="github-icon" /></a>
        </footer>
    );
}

export default Footer;