import React from 'react'
import Group from '../../images/Group.png'
import classes  from '../../styles/header.module.css'
import { NavLink } from 'react-router-dom'
import basket from '../../images/Vector.png'




function Header() {
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
            <NavLink className={classes.nav}>Меню &#9660;</NavLink>
          </li>
          <li>
            <NavLink className={classes.nav}>Наши преимущества</NavLink>
          </li>
          <li>
            <NavLink className={classes.nav}>Отзывы</NavLink>
          </li>
          <li>
            &#128222; +996500405988
          </li>
          <li>
            <NavLink className={classes.nav}><img src={basket} alt="" /> 1</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
