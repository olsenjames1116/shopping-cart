import React from 'react';
import Nav from './nav/Nav';
import '../../styles/header/Header.css';

// Represents the header at the top of every page
export default function Header({cart}) {
    return (
        <div className='header'>
            <h1>Jim Class</h1>
            <Nav cart={cart} />
        </div>
    );
}