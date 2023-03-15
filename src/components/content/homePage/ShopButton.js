import React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/content/homePage/ShopButton.css';

// Represents the button that directs the user to the shop from the home page
export default function ShopButton() {
    return (
            <button type='button'>
                <Link to='/shop'>Visit The Shop</Link>
            </button>
    );
}