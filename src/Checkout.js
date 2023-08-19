import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket, user},dispatch]=useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
        <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/1242x182_June.png" alt="" />
        <div className="checkout__title">
          <h3>Hello, {user?.email}</h3>
          <h2>Your shopping basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        </div>
        <div className="checkout__right">
        <Subtotal/>
        </div>
    </div>
  );
}

export default Checkout