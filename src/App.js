import React, { useState, useEffect} from 'react';
import Shop from './Shop';
import Header from './Header';
import Footer from './Footer';
import BasketList from './BasketList';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Shop/>
      <Footer/>
    </div>
  )
}

export default App
