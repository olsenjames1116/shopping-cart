import React from 'react';

export default function Quantity({quantity, name}) {
    function checkValidity(event) {
        let input = parseInt(event.target.value)

        if(input > 99) event.target.value = 99;
        if(input < 0) event.target.value = 0;
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <input className={name} type='number' id='quantity' min='0' max='99' placeholder={quantity} onChange={checkValidity} />
        </form>
    );
}