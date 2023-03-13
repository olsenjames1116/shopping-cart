import React from 'react';
import Quantity from './Quantity';
import RemoveButton from './RemoveButton';

export default function Item({item, quantity, remove, removeFromCart}) {
    return (
        <li id={item.id}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>${item.price}</span>
            {quantity && <Quantity id={item.id} quantity={item.quantity} />}
            {remove && <RemoveButton removeFromCart={removeFromCart} />}
        </li>
    );
}