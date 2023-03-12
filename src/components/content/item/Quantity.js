import React from 'react';

export default function Quantity({quantity, name}) {
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <input className={name} type='number' id='quantity' min='0' max='999' placeholder={quantity} />
        </form>
    );
}