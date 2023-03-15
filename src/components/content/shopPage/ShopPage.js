import React from 'react';
import Item from '../item/Item';
import {Link} from 'react-router-dom';
import '../../../styles/content/shopPage/ShopPage.css';

// Represents the shop page
export default function ShopPage({items}) {
    return (
        <ul className='shop content'>
            {
                // Displays all items from the item state
                items.map((item) => {
                    return (
                        <Link key={item.id} to={`/shop/${item.id}`}>
                            <Item item={item} quantity={false}/>
                        </Link>
                    );
                })
            }
        </ul>
    );
}