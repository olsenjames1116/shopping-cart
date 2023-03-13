import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import '../../../styles/header/nav/Nav.css';

export default function Nav({cart}) {
    const style = {
        textDecoration: 'none'
    }

    return (
        <ul className='nav'>
            <li>
                <Link style={style} to='/'>Home</Link>
            </li>
            <li>
                <Link style={style} to='/shop'>Shop</Link>
            </li>
            <li>
                <Link style={style} to='/checkout'><Cart cart={cart} /></Link>
            </li>
        </ul>
    );
}