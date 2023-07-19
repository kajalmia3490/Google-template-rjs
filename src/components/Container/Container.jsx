import React from 'react';
import './Container.css';
import Footer from '../Footer/Footer';

const Container = () => {
    return (
        <div className='container'>
            <h1 className='h1'>
                Google
            </h1>

            <input type='search' placeholder='Search here' />

            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Container;