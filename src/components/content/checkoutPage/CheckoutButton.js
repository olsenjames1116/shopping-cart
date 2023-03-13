import React from 'react';

export default function CheckoutButton({clearCart}) {
    function checkout() {
        clearCart();
        alert('Thank you for your purchase!');
    }

    return (
        <button type='button' onClick={checkout}>Pay</button>
    );
}