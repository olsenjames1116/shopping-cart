import React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/content/homePage/ShopButton.css';

export default function ShopButton() {
    return (
            <button type='button'>
                <Link to='/shop'>Visit The Shop</Link>
            </button>
    );
}