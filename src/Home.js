import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return( 
  <div className="home">
    <div className="home__container">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/0-PC_Hero_2x._CB594150943_.jpg" alt="hi"/>

    <div className="home__row">
        <Product
        title='Do It Today'
        price={29.99}
        image={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"}
        rating={5}
        />
        <Product
        title='Think Straight'
        price={19.99}
        image={"https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY327_FMwebp_QL65_.jpg"}
        rating={4}
        />
    </div>

    <div className="home__row">
    <Product
        title='Smart Phones'
        price={499.99}
        image={"https://m.media-amazon.com/images/I/71HOERLKYqL._AC_SY200_.jpg"}
        rating={5}
        />
        <Product
        title='Smart Watch'
        price={99.99}
        image={"https://m.media-amazon.com/images/I/51Lums4VcgL._AC_UL600_FMwebp_QL65_.jpg"}
        rating={4}
        />
        <Product
        title='Acessories For Men'
        price={199.99}
        image={"https://m.media-amazon.com/images/I/719EgYybhUL._AC_UL600_FMwebp_QL65_.jpg"}
        rating={4}
        />
    </div>

    <div className="home__row">
    <Product
        title='Samsung 34-inches 86.42cm LED Odyssey G5'
        price={1099.99}
        image={"https://m.media-amazon.com/images/I/71it2biogSS._AC_UY327_FMwebp_QL65_.jpg"}
        rating={3}
        />
    </div>

    </div>
  </div>
  );
}

export default Home