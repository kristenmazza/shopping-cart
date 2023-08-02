
import './App.css'
import Home from './components/Home'
import Footer from './components/footer'
import Header from './components/header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
