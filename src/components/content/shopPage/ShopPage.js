import React from 'react';
import Item from '../item/Item';
import {Link} from 'react-router-dom';
import '../../../styles/content/shopPage/ShopPage.css';

export default function ShopPage({items}) {
    return (
        <ul className='shop content'>
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