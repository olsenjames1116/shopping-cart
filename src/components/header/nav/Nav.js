import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

export default function Nav({cart}) {
    return (
        <ul>
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