import React from 'react';
import {Link} from 'react-router-dom';

export default function ShopButton() {
    return (
        <Link to='/shop'>
            <button type='button'>Visit The Shop</button>
        </Link>
    );
}