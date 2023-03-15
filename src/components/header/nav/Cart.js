import React, { useEffect, useState } from 'react';
import CartIcon from '../../../icons/cart.svg';
import '../../../styles/header/nav/Cart.css';

// Represents the cart in the header
export default function Cart({cart}) {
    // Sets the state for the quantity next to the cart icon
    const [cartQuantity, setCartQuantity] = useState(0);

    // Updates the cart quantity next to the cart whenever items are added to or removed from the cart
    function updateQuantity() {
        setCartQuantity(cart.reduce((total, current) => total + current.quantity, 0));
    }

    // Whenever the cart is updated, update the quantity next to the cart icon
    useEffect(() => {
        updateQuantity();
    }, [cart])

    return (
        <div className='cart'>
            <img src={CartIcon} alt='a shopping cart'></img>
            <span>{cartQuantity}</span>
        </div>
    )
}