import React from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../item/Item';

export default function ItemPage({items}) {
    const {id} = useParams();
    
    const item = items.find((item) => item.id === id);
    
    return (
        <div className='item'>
            <Item item={item} quantity={true}/>
        </div>
    );
}