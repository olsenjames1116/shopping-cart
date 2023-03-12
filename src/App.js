import React, {useState} from 'react';
import RouteSwitch from './RouteSwitch';
import Footer from './components/footer/Footer';
import uniqid from 'uniqid';
import {Barbell, Dumbbells, Gloves, JumpRope, Kettlebell, MedicineBall, Plates, Protein, Ropes, Rowing, Shaker, Shoes, SquatRack, Watch, Yoga} from './images/index';

export default function App() {
  const [items, setItems] = useState([
    {
      id: uniqid(),
      image: Barbell,
      name: 'Barbell',
      price: 150,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Dumbbells,
      name: 'Dumbbells',
      price: 1500,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Gloves,
      name: 'Boxing Gloves',
      price: 40,
      quantity: 0
    },
    {
      id: uniqid(),
      image: JumpRope,
      name: 'Jump Rope',
      price: 25,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Kettlebell,
      name: 'Kettlebell',
      price: 50,
      quantity: 0
    },
    {
      id: uniqid(),
      image: MedicineBall,
      name: 'Medicine Ball',
      price: 40,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Plates,
      name: 'Bumper Plates',
      price: 730,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Protein,
      name: 'Protein Powder',
      price: 50,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Ropes,
      name: 'Training Rope',
      price: 150,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Rowing,
      name: 'Rowing Machine',
      price: 650,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Shaker,
      name: 'Shaker Bottle',
      price: 10,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Shoes,
      name: 'Running Shoes',
      price: 60,
      quantity: 0
    },
    {
      id: uniqid(),
      image: SquatRack,
      name: 'Barbell',
      price: 750,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Watch,
      name: 'Fitness Watch',
      price: 150,
      quantity: 0
    },
    {
      id: uniqid(),
      image: Yoga,
      name: 'Yoga Mat',
      price: 20,
      quantity: 0
    },
  ]);

  function addToCart() {
    const cartQuantity = document.querySelector('input#quantity');

    const productName = document.querySelector('li>span:nth-child(2)');

    const index = items.findIndex((item) => item.name === productName.textContent);
    
    setItems([...items.slice(0, index), Object.assign({}, {...items[index]}, {quantity: parseInt(cartQuantity.value)}), ...items.slice(index + 1)]);
  }

  return (
    <div className='app'>
      <RouteSwitch items={items} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}
