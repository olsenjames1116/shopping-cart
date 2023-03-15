import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';
import '../../../styles/content/checkoutPage/CheckoutPage.css';

// Represents the checkout page
export default function CheckoutPage({cart, updateCart, clearCart, removeFromCart}) {
    const [total, setTotal] = useState(0);

    // Adds and removes event listeners to update the quantity of an item in the cart
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

    // Updates the total for the cart when the cart is updated
    useEffect(() => {
        const totalSum = cart.reduce((total, current) => total + current.price * current.quantity, 0);
        setTotal(totalSum);
    }, [cart]);

    return (
        <div className='checkout content'>
            <h2>Your Cart</h2>
            <ul>
                {
                    // Display all items in the cart
                    cart.map((item) => {
                        return (
                            <Item key={item.id} item={item} quantity={true} remove={true} removeFromCart={removeFromCart} />
                        );
                    })
                }
            </ul>
            <span className='total'>Total: ${total}</span>
            <CheckoutButton clearCart={clearCart} />
            <Link to='/shop'>
                <button type='button'>Return to Shop</button>
            </Link>
        </div>
    );
}