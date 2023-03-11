import React, { useEffect } from 'react';
import Nav from './nav/Nav';

export default function Header() {
    useEffect(() => {
        console.log('header rendered')
    }, []);

    return (
        <div className='header'>
            <h1>Jim Class</h1>
            <Nav />
        </div>
    );
}