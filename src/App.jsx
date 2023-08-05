
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { createContext } from 'react';

export const GlobalContext = createContext("");

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
        <Header />
        <Outlet />
        <Footer />
      </GlobalContext.Provider>
    </>
  )
}

export default App
