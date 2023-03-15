import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import '../../../styles/header/nav/Nav.css';

// Represents the navigation section in the header
export default function Nav({cart}) {
    return (
        <ul className='nav'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/shop'>Shop</Link>
            </li>
            <li>
                <Link to='/checkout'><Cart cart={cart} /></Link>
            </li>
        </ul>
    );
}