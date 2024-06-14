import React from 'react';
import reviewsStyles from './reviews.module.css';
import pencil_img from './imgReviews/pencil.svg';
import pencil_img2 from './imgReviews/pencil2.svg';



function ReviewsPage() {
    return (
        <div className={reviewsStyles.reviews_page}>
            <h2 className={reviewsStyles.reviews_title}>
                Отзывы
            </h2>
            <div className={reviewsStyles.reviews_blocks}>
                <div className={reviewsStyles.reviews_block}>
                    <div className={reviewsStyles.reviews_card}>
                        <div style={{
                            position: 'absolute',
                            top: '3px',
                            left: '-1px',
                            width: '20px',
                            height: '20px',
                            backgroundImage: `url(${pencil_img}`
                        }}></div>
                        <div className={reviewsStyles.reviews_card_circle}></div>
                        <div className={reviewsStyles.reviews_txt_block}>
                            <p>Сергей</p>
                            <img src={pencil_img2} alt="picture of pencil"/>
                        </div>
                        <p className={reviewsStyles.reviews_txt}>Большое спасибо! 5 пицц доставили даже быстрее чем
                            планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел
                            отлично! :)
                        </p>
                        <span className={reviewsStyles.reviews_date}>02.07.2020</span>
                    </div>
                </div>
                <div className={reviewsStyles.reviews_block}>
                    <div className={reviewsStyles.reviews_card}>
                        <div style={{
                            position: 'absolute',
                            top: '3px',
                            left: '-1px',
                            width: '20px',
                            height: '20px',
                            backgroundImage: `url(${pencil_img}`
                        }}></div>
                        <div className={reviewsStyles.reviews_card_circle}></div>
                        <div className={reviewsStyles.reviews_txt_block}>
                            <p>Сергей</p>
                            <img src={pencil_img2} alt="picture of pencil"/>
                        </div>
                        <p className={reviewsStyles.reviews_txt}>Большое спасибо! 5 пицц доставили даже быстрее чем
                            планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел
                            отлично! :)
                        </p>
                        <span className={reviewsStyles.reviews_date}>02.07.2020</span>
                    </div>
                </div>
                <div className={reviewsStyles.reviews_block}>
                    <div className={reviewsStyles.reviews_card}>
                        <div style={{
                            position: 'absolute',
                            top: '3px',
                            left: '-1px',
                            width: '20px',
                            height: '20px',
                            backgroundImage: `url(${pencil_img}`
                        }}></div>
                        <div className={reviewsStyles.reviews_card_circle}></div>
                        <div className={reviewsStyles.reviews_txt_block}>
                            <p>Сергей</p>
                            <img src={pencil_img2} alt="picture of pencil"/>
                        </div>
                        <p className={reviewsStyles.reviews_txt}>Большое спасибо! 5 пицц доставили даже быстрее чем
                            планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел
                            отлично! :)
                        </p>
                        <span className={reviewsStyles.reviews_date}>02.07.2020</span>
                    </div>
                </div>
                <div className={reviewsStyles.reviews_block}>
                    <div className={reviewsStyles.reviews_card}>
                        <div style={{
                            position: 'absolute',
                            top: '3px',
                            left: '-1px',
                            width: '20px',
                            height: '20px',
                            backgroundImage: `url(${pencil_img}`
                        }}></div>
                        <div className={reviewsStyles.reviews_card_circle}></div>
                        <div className={reviewsStyles.reviews_txt_block}>
                            <p>Сергей</p>
                            <img src={pencil_img2} alt="picture of pencil"/>
                        </div>
                        <p className={reviewsStyles.reviews_txt}>Большое спасибо! 5 пицц доставили даже быстрее чем
                            планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел
                            отлично! :)
                        </p>
                        <span className={reviewsStyles.reviews_date}>02.07.2020</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewsPage;