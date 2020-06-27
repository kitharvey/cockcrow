import React from 'react';
import front from '../img/front.jpg'
import inside from '../img/inside.jpg'

const Shop = ({handleQuantityChangeVariable, handleAddToCartVariable}) => {

    return(
        <div className="main">
            <div className="shop-main">
                <div className="product">
                    <img className="front" src={front} alt="front"/>
                    <img className="inside" src={inside} alt="inside"/>
                </div>

                <div className="product-details">
                    <h3 className="product-name">THE GOOD MORNING</h3>
                    <p className="price">$15.00 USD</p>
                    <p className="product-description">A richly balanced medium roast with the smooth taste of red fruits, baker's chocolate, and cola. It's roasted from a certified organic blend of seasonal 50% Guatemalan & 50% Peruvian coffee beans.</p>
                    <p className="product-description">Roasted in Virginia Beach, VA every Tuesday and shipped out within 24 hours.</p>
                    <p className="product-description">12 ounces of organic whole beans.</p>

                    <div className="add-to-cart">
                        <input className="qnty" type="number"  min="1" placeholder="1" onChange={handleQuantityChangeVariable}/>
                        <div id="add-to-cart" className="button" onClick={handleAddToCartVariable}>ADD TO CART</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop

