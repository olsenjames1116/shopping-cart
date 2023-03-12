import React from 'react';
import Item from '../item/Item';

export default function ShopPage({items}) {
    return (
        <ul className='shop'>
            {
                items.map((item) => {
                    return <Item item={item} quantity={false}/>
                })
            }
        </ul>
    );
}