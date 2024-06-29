import React, {useRef} from 'react'
import OurAdvantagesPage from "../../components/ourAdvantagesPage/OurAdvantagesPage"
import ReviewsPage from "../../components/reviewsPage/ReviewsPage"
import NewProductsPage from "../../components/newProductsPage/NewProductsPage";
import MenuPage from "../../components/menuPage/MenuPage";
import Delievery from '../../components/delievery/Delievery'
import Header from '../../components/header/Header';
import Footer from './../../components/footer/Footer'


function MainPage() {

  const menuRef = useRef(null);
  const advantagesRef = useRef(null);
  const reviewsRef = useRef(null);
  const mainRef = useRef(null)

  const scrollToSection = (section) => {
    switch (section) {
      case 'menu':
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'advantages':
        advantagesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'reviews':
        reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'main':
        mainRef.current.scrollIntoView({ behavior: 'smooth' });
        break; 
      default:
        break;
    }
  };


  return (
    <div className='main__div'>
      <div className='main__page'>
        <div ref={mainRef}>
        <Header scrollToSection={scrollToSection} />
        </div>
        <div ref={menuRef}>
        <Delievery scrollToSection={scrollToSection} />
        </div>
        <NewProductsPage/>
        <div ref={menuRef}>
        <MenuPage />
        </div>
        <div ref={advantagesRef}>
        <OurAdvantagesPage />
        </div>
        <div ref={reviewsRef}>
        <ReviewsPage />
        </div>
      </div>
        <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default MainPage
