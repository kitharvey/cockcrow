import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main">
            <div className="hero-a">
                <Link className="buy" to="/shop" >Buy Now</Link>
                <small className="scroll">SCROLL</small>
            </div>
            <div className="hero-text">
                <p className="text">Freshly ground heaven.</p>
                <small className="text-small"> Organic beans are hand-selected by our team and roasted to perfection. </small>
            </div>
            <div className="hero-b"></div>
            <div className="hero-text">
                <p className="text">Nectar of Gods.</p>
                <small className="text-small"> Our goal is to create the best tasting cup of coffee you’ve ever experienced. Our beans are hand picked all across the world and roasted to perfection. Our unique methods produce a flavor you’ll never forget.  </small>
            </div>
            <div className="hero-c"></div>
            <div className="hero-text-bottom">
                <p className="text">Cure for depresso.</p>
                <small className="text-small"> Our team works round the clock to ensure your beans are roasted just two days before they’re packaged and delivered to your door. </small>
                <Link className="buy" to="/shop" >Buy Now</Link>
            </div>
        </div>
    )
}

export default Home