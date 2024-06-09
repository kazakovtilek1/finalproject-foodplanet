import React from 'react';
import {Route, Routes} from "react-router-dom";
import PizzaPage from "../pizzaPage/PizzaPage";
import BurgersPage from "../burgersPage/BurgersPage";
import SushiPage from "../sushiPage/SushiPage";
import RollyPage from "../rollyPage/RollyPage";
import SaladsPage from "../saladsPage/SaladsPage";
import DessertsPage from "../dessertsPage/DessertsPage";
import DrinksPage from "../drinksPage/DrinksPage";
import BurgerNavBar from "../../burgerNavBar/BurgerNavBar";


function NewsPage() {
    return (
        <div>
            <BurgerNavBar/>
                <Routes>
                        <Route path="/pizza" element={<PizzaPage/>}/>
                        <Route path="/burgers" element={<BurgersPage/>}/>
                        <Route path="/sushi" element={<SushiPage/>}/>
                        <Route path="/rolly" element={<RollyPage/>}/>
                        <Route path="/salads" element={<SaladsPage/>}/>
                        <Route path="/desserts" element={<DessertsPage/>}/>
                        <Route path="/drinks" element={<DrinksPage/>}/>
                </Routes>
        </div>
    );
}

export default NewsPage;