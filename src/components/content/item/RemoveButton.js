import React from 'react';

// Represents the remove button that on the checkout page
export default function RemoveButton({removeFromCart}) {
    return (
        <button type='button' onClick={removeFromCart}>Remove from Cart</button>
    );
}