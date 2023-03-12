import React from 'react';
import Nav from './nav/Nav';

export default function Header({cart}) {
    return (
        <div className='header'>
            <h1>Jim Class</h1>
            <Nav cart={cart} />
        </div>
    );
}