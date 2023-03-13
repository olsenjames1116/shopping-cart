import React from 'react';

export default function RemoveButton({removeFromCart}) {
    return (
        <button type='button' onClick={removeFromCart}>Remove from Cart</button>
    );
}