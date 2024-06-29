import React from 'react'
import classes from '../../styles/footer.module.css'
import GroupWhite from '../../images/GroupWhite.png'
import { NavLink } from 'react-router-dom'

function Footer({ scrollToSection }) {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
      <div className={classes.footer__left}>
        <img src={GroupWhite} alt="" />
        <div>
          <h5>FOOD PLANET</h5>
          <p>Планета вкусной еды</p>
        </div>
      </div>
      <div>
        <ul className={classes.footer__ul}>
          <li>
            <NavLink onClick={() => scrollToSection('main')} className={classes.nav} to="/">Главная</NavLink>
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
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer
