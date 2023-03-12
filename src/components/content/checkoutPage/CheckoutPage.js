import React, { useEffect } from 'react';
import Item from '../item/Item';

export default function CheckoutPage({cart, updateCart}) {
    useEffect(() => {
        const itemQuantities = document.querySelectorAll('input#quantity');

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

    return (
        <div className='checkout'>
            <h2>Your Cart</h2>
            <ul>
                {
                    cart.map((item) => <Item key={item.id} item={item} quantity={true} />)
                }
            </ul>
        </div>
    );
}