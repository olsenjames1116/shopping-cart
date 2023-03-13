import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from '../../item/Item';

export default function ItemPage({items, addToCart}) {
    const {id} = useParams();

    const item = items.find((item) => item.id === id);
    
    return (
        <div className='item content'>
            <Item item={item} quantity={true} />
            <button type='button' onClick={addToCart}>Add to Cart</button>
            <Link to='/shop'>
                <button type='button'>Return to Shop</button>
            </Link>
        </div>
    );
}