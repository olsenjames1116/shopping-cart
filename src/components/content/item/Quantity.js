import React from 'react';

// Reached on the item page and checkout page to display and change quantity in the cart
export default function Quantity({quantity, id}) {
    /* Checks to make sure the input is within the min and max. Assigns the quantity to the min or max if 
    the input is above or below the range */
    function checkValidity(event) {
        const input = parseInt(event.target.value);
        const max = parseInt(event.target.max);
        const min = parseInt(event.target.min);

        if(input > max) event.target.value = max;
        if(input < min) event.target.value = min;
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <input id={id} type='number' min='0' max='99' placeholder={quantity} onChange={checkValidity} />
        </form>
    );
}