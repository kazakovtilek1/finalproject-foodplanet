import React from 'react';
import {NavLink} from "react-router-dom";
import burgerStyles from "../pages/burgersPage/burgersPage.module.css";


function BurgerNavBar() {
    return (
        <ul className={burgerStyles.burger_navBar}>
            <li className={burgerStyles.burger_nav_txt}>
                <NavLink to="/">Новинки</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/pizza" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Пицца</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/burgers" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Бургер</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/sushi" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Суши</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/rolly" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Роллы</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/salads" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Салаты</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/desserts" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Десерты</NavLink>
            </li>
            <li className={burgerStyles.burger_nav_li}>
                <NavLink to="/drinks" className={({isActive}) => isActive ? burgerStyles.testActive : ""}>Напитки</NavLink>
            </li>
        </ul>
    );
}

export default BurgerNavBar;