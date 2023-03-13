import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';

export default function CheckoutPage({cart, updateCart, clearCart}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const itemQuantities = document.querySelectorAll('input');

        itemQuantities.forEach((quantity) => {
            quantity.addEventListener('change', (event) => {
                updateCart(event);
            })
        })

        return () => {
            itemQuantities.forEach((quantity) => {
                quantity.removeEventListener('change', (event) => {
                    updateCart(event);
                })
            })
        }
    }, []);

    useEffect(() => {
        const totalSum = cart.reduce((total, current) => total + current.price * current.quantity, 0);
        setTotal(totalSum);
    }, [cart]);

    function checkout() {
        clearCart();
        alert('Thank you for your purchase!');
    }

    return (
        <div className='checkout'>
            <h2>Your Cart</h2>
            <ul>
                {
                    cart.map((item) => <Item key={item.id} item={item} quantity={true} />)
                }
            </ul>
            <span>Total: {total}</span>
            <button type='button' onClick={checkout}>Pay</button>
            <Link to='/shop'>
                <button type='button'>Return to Shop</button>
            </Link>
        </div>
    );
}