import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
function App() {
  const[showLogin, setShowLogin]=useState(false);


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
    <BrowserRouter>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </BrowserRouter>
      </div>
      <Footer/>
      </>
  )
}

export default App
