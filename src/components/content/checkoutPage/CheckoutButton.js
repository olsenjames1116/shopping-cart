import React from 'react';

// Represents the checkout button on the checkout page
export default function CheckoutButton({clearCart}) {
    // Clear the cart and display a thank you message on pressing the button
    function checkout() {
        clearCart();
        alert('Thank you for your purchase!');
    }

    return (
        <button type='button' onClick={checkout}>Proceed to Checkout</button>
    );
}