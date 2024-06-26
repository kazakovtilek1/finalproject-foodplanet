import React from 'react'
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage"
import ReviewsPage from "../../components/reviewsPage/ReviewsPage"
import NewProductsPage from "../../components/newProductsPage/NewProductsPage";


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
