import React, {useState, useEffect} from 'react';
import './css/style.css';
import Navigation from './Components/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import Footer from './Components/Footer'

const App = () => {

  const [quantityInput, setQuantityInput] = useState(1)
  const [addToCartQuantity, setAddToCartQuantity] = useState(localStorage.getItem('items')||0)
  const [openCart, setOpenCart] = useState(false)
  const [checkOut, setCheckOut] = useState('CHECKOUT')
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
      localStorage.setItem('items', addToCartQuantity)
  },[addToCartQuantity])

  const handleAddToCart = () => {
      setAddToCartQuantity(parseInt(addToCartQuantity) + parseInt(quantityInput))
      setOpenCart(true)
      
  }
  const handleQuantityChange = event => {
      setQuantityInput(event.target.value)
  }

  const handleOpenCart = () => {
     setOpenCart(true)
  }

  const handleCloseCart = () => {
     setOpenCart(false)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleCheckOut = () => {
    setCheckOut('Out of Stock')
  }

  const handleRemove = () => {
    setAddToCartQuantity(0)
  }


  return (
    <div className="App">
      <Router>
        <Navigation isCartOpen={openCart} addToCartQuantityVariable = {addToCartQuantity} handleOpenCartVariable = {handleOpenCart} handleCloseCartVariable={handleCloseCart} toggleVariable = {toggle} handleToggleVariable = {handleToggle} handleCheckOutVariable = {handleCheckOut} checkOutVariable = {checkOut} handleRemoveVariable = {handleRemove} />
        <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/shop">
                    <Shop handleQuantityChangeVariable = {handleQuantityChange} handleAddToCartVariable = {handleAddToCart} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
