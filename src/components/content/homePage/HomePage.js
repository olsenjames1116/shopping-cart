import React from 'react';
import Summary from './Summary';
import ShopButton from './ShopButton';

export default function HomePage() {
    return (
        <div className='homePage content'>
            <Summary />
            <ShopButton />
        </div>
    );
}