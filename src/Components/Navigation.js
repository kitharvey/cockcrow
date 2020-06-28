import React from 'react';
import logo from '../img/LOGO.svg'
import front from '../img/front.jpg'
import {NavLink} from "react-router-dom"

const Navigation = ({isCartOpen, addToCartQuantityVariable, handleOpenCartVariable, handleCloseCartVariable, toggleVariable, handleToggleVariable, handleCheckOutVariable, checkOutVariable, handleRemoveVariable}) => {

    return(
        <>
            <header className="Header">
                <div className="navbar">
                    <div className="logo">
                        <NavLink to={`/`}><img src={logo} alt="logo" /> </NavLink>
                    </div>

                    <div className={`menu ${toggleVariable ? 'open' : ''}`}>
                        <NavLink onClick = {handleToggleVariable} activeClassName="active-nav" className= 'menu-items' exact to={`/`}>home</NavLink>
                        <NavLink onClick = {handleToggleVariable} activeClassName="active-nav" className= 'menu-items' exact to={`/about`}>about</NavLink>
                        <NavLink onClick = {handleToggleVariable} activeClassName="active-nav" className= 'menu-items' exact to={`/shop`}>shop</NavLink>
                    </div>

                    <div className="cart-btn">
                        <div className="cart-button" data-count={`${addToCartQuantityVariable}`} onClick={handleOpenCartVariable}> <i className="fas fa-shopping-cart"></i> </div>
                    </div>

                    <div className="menu-button">
                        <span className={`burger ${toggleVariable ? 'open' : ''}`} onClick={handleToggleVariable}></span>
                    </div>
                </div>
            </header>

            <div className={`cart ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-container">
                    <div className="cart-header">
                        <h3 className="your-cart">Your Cart</h3>
                        <div className="close" onClick={handleCloseCartVariable}>&times;</div>
                    </div>
                    <div className="cart-items"> {addToCartQuantityVariable ? 
                    <div className="cart-item">
                        <div id="remove" className="close" onClick={handleRemoveVariable}>&times;</div>
                        <img className="front" src={front} alt="front"/>
                        <div className="product-des">
                            <h3 className="product-name">THE GOOD MORNING</h3>
                            <p>$ <span className="price"> 15.00 </span> USD</p>
                        </div>
                        <div className="quantity">{ addToCartQuantityVariable }</div>
                    </div> 
                    : 
                    <p>No items found.</p>}  </div>
                    <div className="cart-footer">
                        <h3>Subtotal</h3>
                    <p>$ <span className="subtotal"> {addToCartQuantityVariable * 15} </span>.00</p>
                    </div>
                    <div id="checkout" className="checkout" onClick={handleCheckOutVariable}> {checkOutVariable} </div>
                </div>
            </div>
        </>
    )
}


export default Navigation