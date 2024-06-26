import React from 'react'
import NewProductsPage from "../../components/newProductsPage/NewProductsPage";
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage";
import ReviewsPage from "../../components/reviewsPage/ReviewsPage";
import MenuPage from "../../components/menuPage/MenuPage";


function MainPage() {
  return (
    <div>
        <NewProductsPage/>
        <MenuPage/>
        <OurAdvantagesPage/>
        <ReviewsPage/>
    </div>
  )
}

export default MainPage
