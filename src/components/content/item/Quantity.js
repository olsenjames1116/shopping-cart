import React from 'react';

export default function Quantity({quantity, id}) {
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