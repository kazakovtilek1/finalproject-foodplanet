import React, {useEffect} from 'react';
import reviewsStyles from '../../styles/reviews.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews, selectReviews} from "../../store/reviewsSlice";

function ReviewsPage() {
    const dispatch = useDispatch();
    const reviews = useSelector(selectReviews);

    useEffect(() => {
            dispatch(fetchReviews());
    }, []);


    return (
        <div className={reviewsStyles.reviews_page}>
            <h2 className={reviewsStyles.reviews_title}>
                Отзывы
            </h2>
            <div className={reviewsStyles.reviews_blocks}>
                {reviews && reviews.map(review => (
                    <div key={review.id} className={reviewsStyles.reviews_block}>
                        <div className={reviewsStyles.reviews_card}>
                            <div style={{
                                position: 'absolute',
                                top: '3px',
                                left: '-1px',
                                width: '20px',
                                height: '20px'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_319)">
                                            <path d="M2 13.8324L0 20.0324L6.2 18.0324L2 13.8324Z" fill="#1D3130"/>
                                                <path
                                                    d="M13.5519 3.08647L3.79401 12.8444L8.03658 17.0869L17.7945 7.32904L13.5519 3.08647Z"
                                                    fill="#1D3130"/>
                                                <path
                                                    d="M19.3275 3.1L16.5275 0.3C16.1275 -0.1 15.5275 -0.1 15.1275 0.3L14.2275 1.2L18.4275 5.4L19.3275 4.5C19.7275 4.1 19.7275 3.5 19.3275 3.1Z"
                                            fill="#FF583E"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_319">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                </svg>
                            </div>
                            <div className={reviewsStyles.reviews_card_circle}></div>
                            <div className={reviewsStyles.reviews_txt_block}>
                                <p>{review.name}</p>
                                <svg width="14" viewBox="0 0 14 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_352)">
                                            <path d="M12.0527 9.42029L13.3158 13.3361L9.40002 12.0729L12.0527 9.42029Z"
                                                  fill="#1D3130"/>
                                            <path
                                                d="M4.75671 2.63339L10.9196 8.79626L8.24007 11.4758L2.07719 5.3129L4.75671 2.63339Z"
                                                fill="#1D3130"/>
                                            <path
                                                d="M1.10893 2.64198L2.87735 0.873556C3.12999 0.620924 3.50893 0.620924 3.76157 0.873556L4.32999 1.44198L1.67736 4.09461L1.10893 3.52619C0.856302 3.27356 0.856302 2.89461 1.10893 2.64198Z"
                                                fill="#FF583E"/>
                                        </g>
                                    <defs>
                                        <clipPath id="clip0_2_352">
                                            <rect width="12.6316" height="12.6316" fill="white"
                                                  transform="matrix(-1 0 0 1 13.3158 0.684082)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className={reviewsStyles.reviews_txt}>{review.content}</p>
                            <span className={reviewsStyles.reviews_date}>{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewsPage;