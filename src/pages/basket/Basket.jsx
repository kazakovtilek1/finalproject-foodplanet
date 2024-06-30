import React, { useEffect, useState } from 'react';
import classes from '../../styles/basket.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';




function Basket() {
  const [burgers, setBurgers] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();



  useEffect(() => {
    const storedBurgers = localStorage.getItem('cart_burgers');
    if (storedBurgers) {
      setBurgers(JSON.parse(storedBurgers));
    }

    const storedPizzas = localStorage.getItem('cart_pizzas');
    if (storedPizzas) {
      setPizzas(JSON.parse(storedPizzas));
    }
  }, []);

  useEffect(() => {
    let totalPriceSum = 0;
    let totalItemsCount = 0;

    burgers.forEach((burger) => {
      totalPriceSum += burger.price * burger.count;
      totalItemsCount += burger.count;
    });

    pizzas.forEach((pizza) => {
      totalPriceSum += pizza.price * pizza.count;
      totalItemsCount += pizza.count;
    });

    setTotalPrice(totalPriceSum);
    setTotalItems(totalItemsCount);

    localStorage.setItem('cart_burgers', JSON.stringify(burgers));
    localStorage.setItem('cart_pizzas', JSON.stringify(pizzas));
  }, [burgers, pizzas]);



  function menuRedirect ()  {
    navigate('/');
  };

  const isEmpty = burgers.length === 0 && pizzas.length === 0;

  function incrementItem (type, productId) {
    if (type === 'burgers') {
      const updatedBurgers = burgers.map((burger) =>
        burger.id === productId ? { ...burger, count: burger.count + 1 } : burger
      );
      setBurgers(updatedBurgers);
    } else if (type === 'pizzas') {
      const updatedPizzas = pizzas.map((pizza) =>
        pizza.id === productId ? { ...pizza, count: pizza.count + 1 } : pizza
      );
      setPizzas(updatedPizzas);
    }
  };

  function decrementItem (type, productId) {
    if (type === 'burgers') {
      const updatedBurgers = burgers.map((burger) =>
        burger.id === productId && burger.count > 1 ? { ...burger, count: burger.count - 1 } : burger
      );
      setBurgers(updatedBurgers);
    } else if (type === 'pizzas') {
      const updatedPizzas = pizzas.map((pizza) =>
        pizza.id === productId && pizza.count > 1 ? { ...pizza, count: pizza.count - 1 } : pizza
      );
      setPizzas(updatedPizzas);
    }
  };

  function removeItem(type, productId) {
    if (type === 'burgers') {
      const updatedBurgers = burgers.filter((burger) => burger.id !== productId);
      setBurgers(updatedBurgers);
    } else if (type === 'pizzas') {
      const updatedPizzas = pizzas.filter((pizza) => pizza.id !== productId);
      setPizzas(updatedPizzas);
    }
  };

  function clearCart() {
    setBurgers([]);
    setPizzas([]);
  }

  return (
    <div>
      <Header />
      <h2 className={classes.basket__title}>Корзина</h2>
      {isEmpty ? (
        <p className={classes.empty}>Корзина пуста <button onClick={menuRedirect} className={classes.basket__menu__btn}>Перейти на главную</button></p>
      ) : (
        <>
          {burgers.length > 0 && <h4 className={classes.product__name}>Бургеры:</h4>}
          <div className={classes.basket}>
            {burgers.length > 0 && burgers.map((burger, index) => (
              <div key={index} className={classes.item}>
                <img src={burger.image} alt="burger" />
                <p>Название: {burger.name}</p>
                <p>Цена: {burger.price}</p>
                <div>
                      <button className={classes.plus__minus__btn} onClick={() => decrementItem('burgers', burger.id)}>-</button>
                      <span>{burger.count}</span>
                      <button className={classes.plus__minus__btn} onClick={() => incrementItem('burgers', burger.id)}>+</button>
                      <button className={classes.remove__btn} onClick={() => removeItem('burgers', burger.id)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
          {pizzas.length > 0 && <h4 className={classes.product__name}>Пиццы:</h4>}
          <div className={classes.basket}>
            {pizzas.length > 0 && pizzas.map((pizza, index) => (
              <div key={index} className={classes.item}>
                <img src={pizza.image} alt="pizza" />
                <p>Название: {pizza.name}</p>
                <p>Цена: {pizza.price}</p>
                <div>
                      <button className={classes.plus__minus__btn} onClick={() => decrementItem('pizzas', pizza.id)}>-</button>
                      <span>{pizza.count}</span>
                      <button className={classes.plus__minus__btn} onClick={() => incrementItem('pizzas', pizza.id)}>+</button>
                      <button className={classes.remove__btn} onClick={() => removeItem('pizzas', pizza.id)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <p className={classes.total__p}>Итого: {totalPrice} сом</p>
      <p className={classes.total__p}>Всего товаров: {totalItems}</p>
      <button className={classes.clearAll__btn} onClick={clearCart}>Очистить корзину</button>
      <Footer />
    </div>
  );
}

export default Basket;
