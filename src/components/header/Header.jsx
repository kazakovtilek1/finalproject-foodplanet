import React from 'react'
import Group from '../../images/Group.png'
import classes  from '../../styles/header.module.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';





function Header({ scrollToSection }) {

  const {itemCount} = useSelector(store => store.productTypeReducer);

  
  return (
    <header className={classes.header}>
      <div className={classes.header__left}>
        <img src={Group} alt="" />
        <div>
          <h5>FOOD PLANET</h5>
          <p>Планета вкусной еды</p>
        </div>
      </div>
      <div>
        <ul className={classes.header__ul}>
          <li>
            <NavLink className={classes.nav} to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection('menu')} className={classes.nav}>Меню &#9660;</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection('advantages')} className={classes.nav}>Наши преимущества</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection('reviews')} className={classes.nav}>Отзывы</NavLink>
          </li>
          <li>
            &#128222; +996500405988
          </li>
          <li className={classes.icon__li}>
            <NavLink to="/basket"><FaShoppingCart className={classes.basket__icon} /></NavLink>
            {itemCount > 0 && <span className={classes.itemCount}>{itemCount}</span>}
          </li>
        </ul>
      </div>
    </header>
    
  )
}

export default Header
