import React, { useEffect, useState } from 'react';
import CartIcon from '../../../icons/cart.svg';
import '../../../styles/header/nav/Cart.css';

export default function Cart({cart}) {
    const style = {height: '50px', width: 'auto'};

    const [cartQuantity, setCartQuantity] = useState(0);

    function updateQuantity() {
        setCartQuantity(cart.reduce((total, current) => total + current.quantity, 0));
    }

    useEffect(() => {
        updateQuantity();
    }, [cart])

    return (
        <div className='cart'>
            <img style={style} src={CartIcon} alt='a shopping cart'></img>
            <span>{cartQuantity}</span>
        </div>
    )
}