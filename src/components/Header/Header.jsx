import React from 'react';
import './Header.css';
import { FcBusinessman } from 'react-icons/fc';
import { MdApps } from 'react-icons/md';

const Header = () => {
    return (
        <div className='header'>
            <ul typeof='none'>
                <li>
                    <a href='#'>
                        Gmail
                    </a>
                </li>

                <li>
                    <a href='#'>
                        Images
                    </a>
                </li>

                <li>
                    <a href='#' className='man'>
                        <FcBusinessman />
                    </a>
                </li>

                <li>
                    <a href='#' className='apps'>
                        <MdApps />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;