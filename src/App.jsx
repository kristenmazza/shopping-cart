
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { createContext } from 'react';

export const GlobalContext = createContext("");

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity }}>
        <Header />
        <Outlet />
        <Footer />
      </GlobalContext.Provider>
    </>
  )
}

export default App
