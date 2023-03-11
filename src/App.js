import React from 'react';
import RouteSwitch from './RouteSwitch';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className='app'>
      <RouteSwitch />
      <Footer />
    </div>
  );
}
