import React from 'react';

export default function Quantity({quantity}) {
    return (
        <form>
            <label htmlFor='quantity'>Quantity</label>
            <input type='number' id='quantity' placeholder={quantity}/>
        </form>
    );
}