import React from 'react';
import CartIcon from '../../../icons/cart.svg';

export default function Cart() {
    const style = {height: '50px', width: 'auto'};

    return (
        <div className='cart'>
            <img style={style} src={CartIcon} alt='a shopping cart'></img>
            <span>0</span>
        </div>
    )
}