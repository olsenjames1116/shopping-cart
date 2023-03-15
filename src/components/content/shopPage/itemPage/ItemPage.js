import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from '../../item/Item';
import '../../../../styles/content/shopPage/itemPage/ItemPage.css';

// Represents the item page for all items
export default function ItemPage({items, addToCart}) {
    // Find the item in the items state from the id
    const {id} = useParams();

    const item = items.find((item) => item.id === id);
    
    return (
        <div className='itemPage content'>
            <Item item={item} quantity={true} />
            <button type='button' onClick={addToCart}>Add to Cart</button>
            <Link to='/shop'>
                <button type='button'>Return to Shop</button>
            </Link>
        </div>
    );
}