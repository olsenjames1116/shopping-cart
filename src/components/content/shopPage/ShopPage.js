import React from 'react';
import Item from '../item/Item';
import {Link} from 'react-router-dom';

export default function ShopPage({items}) {
    return (
        <ul className='shop'>
            {
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