import React from 'react';
import advantagesStyles from './ourAdvantages.module.css';
import bus_img from './imgOurAdvantages/delivery.svg';
import salad_img from './imgOurAdvantages/salad.svg';
import menu_img from './imgOurAdvantages/menu.svg';
import location_img from './imgOurAdvantages/location.svg';


function OurAdvantagesPage() {
    return (
        <div className={advantagesStyles.adv_page}>
            <h2 className={advantagesStyles.adv_title}>
                Почему выбирают нас:
            </h2>
            <div className={advantagesStyles.ourAdvantages}>
                <div className={advantagesStyles.advantagesCard}>
                    <div className={advantagesStyles.logo_circle}>
                        <img src={bus_img} alt="picture of bus"/>
                    </div>
                    <h3 className={advantagesStyles.adv_headline}>Мгновенная доставка</h3>
                    <span className={advantagesStyles.adv_txt}>Доставим заказанную вами
                        <p>еду за 30 минут + напиток в подарок</p>
                    </span>
                </div>

                <div className={advantagesStyles.advantagesCard}>
                    <div className={advantagesStyles.logo_circle}>
                        <img src={salad_img} alt="picture of bus"/>
                    </div>
                    <h3 className={advantagesStyles.adv_headline}>Мгновенная доставка</h3>
                    <span className={advantagesStyles.adv_txt}>Доставим заказанную вами
                        <p>еду за 30 минут + напиток в подарок</p>
                    </span>
                </div>

                <div className={advantagesStyles.advantagesCard}>
                    <div className={advantagesStyles.logo_circle}>
                        <img src={menu_img} alt="picture of bus"/>
                    </div>
                    <h3 className={advantagesStyles.adv_headline}>Мгновенная доставка</h3>
                    <span className={advantagesStyles.adv_txt}>Доставим заказанную вами
                        <p>еду за 30 минут + напиток в подарок</p>
                    </span>
                </div>

                <div className={advantagesStyles.advantagesCard}>
                    <div className={advantagesStyles.logo_circle}>
                        <img src={location_img} alt="picture of bus"/>
                    </div>
                    <h3 className={advantagesStyles.adv_headline}>Мгновенная доставка</h3>
                    <span className={advantagesStyles.adv_txt}>Доставим заказанную вами
                        <p>еду за 30 минут + напиток в подарок</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OurAdvantagesPage;