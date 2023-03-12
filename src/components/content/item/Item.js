import React from 'react';
import Quantity from './Quantity';

export default function Item({item, quantity}) {
    return (
        <li>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.price}</span>
            {quantity && <Quantity quantity={item.quantity}/>}
        </li>
    );
}