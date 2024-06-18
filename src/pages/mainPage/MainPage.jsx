import React from 'react'
import NewProductsPage from "../../components/newProductsPage/NewProductsPage";
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage";
import ReviewsPage from "../../components/reviewsPage/ReviewsPage";


function MainPage() {
  return (
    <div>
        <NewProductsPage/>
        <OurAdvantagesPage/>
        <ReviewsPage/>
    </div>
  )
}

export default MainPage
