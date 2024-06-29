import React from 'react'
import classes from '../../styles/delievery.module.css'
import burger from '../../images/burger.png'
import arrow from '../../images/Vector 2.png'

function Delievery({ scrollToSection }) {
  return (
    <main className={classes.delievery}>
        <div>
          <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
          <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
          <button className={classes.menu__btn} onClick={() => scrollToSection('menu')}>ПЕРЕЙТИ В МЕНЮ <img className={classes.arrow} src={arrow} alt="" /></button>
        </div>
        <img className={classes.burger} src={burger} alt="" />
    </main>
  )
}
 
export default Delievery
