import React, {useEffect, useState} from 'react'
import classes from '../../styles/basket.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Basket() {

  const [burger, setBurger] = useState(null);

  useEffect(() => {
    const storedBurger = localStorage.getItem('cart_burgers');
    if (storedBurger) {
      setBurger(JSON.parse(storedBurger));
    }
  }, []);

  return (
    <div>
      <Header/>
      <div className={classes.basket}>
      <h2>Basket</h2>
      {burger ? (
        <div>
          <img src={burger.image} alt="burger" />
          <p>Название: {burger.name}</p>
          <p>Описание: {burger.description}</p>
          <p>Цена: {burger.price}</p>
        </div>
      ) : (
        <p>Корзина пуста</p>
      )}
      </div>
      <Footer/>
    </div>
  )
}

export default Basket
