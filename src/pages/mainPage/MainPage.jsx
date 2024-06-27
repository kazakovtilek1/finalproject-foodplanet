import React from 'react'
import Pizza from '../../features/pizza/Pizza'
import NewsPage from "../../components/newsPage/NewsPage"
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage"
import ReviewsPage from "../../components/reviewsPage/ReviewsPage"
import NewProductsPage from "../../components/newProductsPage/NewProductsPage";
<<<<<<< HEAD
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage";
import ReviewsPage from "../../components/reviewsPage/ReviewsPage";
import MenuPage from "../../components/menuPage/MenuPage";
=======
>>>>>>> origin/main


function MainPage() {
  return (
    <div>
        {/* <NewsPage/> */}
        <Pizza/>
        <NewProductsPage/>
        <MenuPage/>
        <OurAdvantagesPage/>
        <ReviewsPage/>
    </div>
  )
}

export default MainPage
