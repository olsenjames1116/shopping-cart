import React from 'react';

export default function Quantity({quantity}) {
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor='quantity'>Quantity</label>
            <input type='number' id='quantity' min='0' max='999' placeholder={quantity} />
        </form>
    );
}