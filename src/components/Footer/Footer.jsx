import React from 'react';
import './Footer.css';
import { BsFillPencilFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='activities'>
                My Google Activities
            </div>

            <div className='pen'>
                <BsFillPencilFill />
            </div>
        </div>
    );
};

export default Footer;