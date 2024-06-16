import React from 'react'
import Pizza from '../../features/pizza/Pizza'
import NewsPage from "../../components/newsPage/NewsPage"
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage"
import ReviewsPage from "../../components/reviewsPage/ReviewsPage"


function MainPage() {
  return (
    <div>
        <Pizza/>
        <NewsPage/>
        <OurAdvantagesPage/>
        <ReviewsPage/>
    </div>
  )
}

export default MainPage
