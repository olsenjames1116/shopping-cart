import React, {useEffect, useState} from 'react';
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
      name: 'Squat Rack',
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

  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.table(cart);
  }, [cart])

  useEffect(() => {
    const cartProducts = items.filter((item) => item.quantity > 0);
    
    setCart(cartProducts);
    // cartProducts.forEach((product) => {
    //   const index = cart.findIndex((item) => item.id === product.id);

    //   if(index === -1) {
    //     setCart((prevState) => [...prevState.concat(product)]);
    //   } else {
    //     if(index === 0) {
    //       setCart((prevState) => [Object.assign({}, {...prevState[index]}, {quantity: product.quantity}), ...prevState.slice(index + 1)]);
    //     } else {
    //       setCart((prevState) => [...prevState.slice(0, index), Object.assign({}, {...prevState[index]}, {quantity: product.quantity}), ...prevState.slice(index + 1)]);
    //     }
    //   }
    // });
  }, [items])

  // useEffect(() => {
  //   console.table(items);
  //   const cartProducts = items.filter((item) => item.quantity > 0);
  //   console.table(cartProducts);
  //   const index = cart.findIndex((item) => item.)
  //   setCart();
  // }, [items]);

  function addToCart() {
    const cartQuantity = document.querySelector('input');

    const productName = document.querySelector('li>span:nth-child(2)');

    const index = items.findIndex((item) => item.name === productName.textContent);

    setItems((prevState) => [...prevState.slice(0, index), Object.assign({}, {...prevState[index]}, {quantity: parseInt(cartQuantity.value)}), ...prevState.slice(index + 1)]);
    
    // const cartIndex = cart.findIndex((item) => item.name = productName.textContent);
    // if(cartIndex === -1) {
    //   setCart((prevState) => [...prevState.concat(items[itemsIndex])]);
    // } else {
    //   setCart((prevState) => [...prevState.slice(0, cartIndex), Object.assign({}, {...prevState[cartIndex]}, {quantity: parseInt(cartQuantity.value)}), ...prevState.slice(cartIndex + 1)]);
    // }
  }

  function updateCart(event) {
    const quantityChange = event.target.value;

    const index = items.findIndex((item) => item.id === event.target.id);
    
    setItems((prevState) => [...prevState.slice(0, index), Object.assign({}, {...prevState[index]}, {quantity: parseInt(quantityChange)}), ...prevState.slice(index + 1)]);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className='app'>
      <RouteSwitch items={items} cart={cart} addToCart={addToCart} updateCart={updateCart} clearCart={clearCart} />
      <Footer />
    </div>
  );
}
