import React from 'react';
import Author from './Author';
import Sources from './Sources';
import '../../styles/footer/Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <Author />
            <Sources />
        </div>
    );
}