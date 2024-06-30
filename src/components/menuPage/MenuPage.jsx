import React, {useEffect} from 'react';
import pizzaStyles from '../../styles/menuPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    incrementMenuProductCount,
    decrementMenuProductCount,
    addToMenuLocalStorage,
    fetchMenuProducts,
    getProductsType,
    setMenuProductType
} from "../../store/productCountSlice";



function MenuPage() {
    const {productTypes, currentMenuProductType, menuProducts} = useSelector((store) => store.productTypeReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsType());
        dispatch(setMenuProductType(1));
    }, [dispatch]);

    useEffect(() => {
        if (currentMenuProductType !== null) {
            dispatch(fetchMenuProducts(currentMenuProductType));
        }
    }, [currentMenuProductType, dispatch]);

    const handleFilter = (id) => {
        dispatch(setMenuProductType(id));
    };

    const changeCountIncrement = (productId) => {
        dispatch(incrementMenuProductCount({ productId }));
        console.log('incr pizzy', menuProducts.find(p => p.id === productId).count);
    };

    const changeCountDecrement = (productId) => {
        dispatch(decrementMenuProductCount({ productId }));
    };

    const addProductsToLS = (productId) => {
        dispatch(addToMenuLocalStorage({ productId }));
    };

    

    return (
        <div>
            <ul className={pizzaStyles.pizza_pages}>
                <p className={pizzaStyles.pizza_news_txt}>Меню</p>
                {productTypes && productTypes.map(type => (
                    <button className={pizzaStyles.pizza_pages_li_btn}
                            onClick={() => handleFilter(type.id)} key={type.id}>
                        <p className={pizzaStyles.pizza_pages_li}>
                            {type.title}
                        </p>
                    </button>
                ))}
            </ul>

            <div className={pizzaStyles.pizza_sort}>
                <button className={pizzaStyles.pizza_sort_left_btn}>Сортировать  по: </button>
                <button className={pizzaStyles.pizza_sort_right_btn}>По умолчанию
                    <svg className={pizzaStyles.pizza_sort_txt} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 6L0 0H10L5 6Z" fill="#6C6C6C"/>
                    </svg>
                </button>
            </div>


            <ul className={pizzaStyles.pizza_card}>
                {menuProducts && menuProducts.map((product) => (
                    <div key={product.id}
                    className={pizzaStyles.pizza_card_bgr}>
                        <div className={pizzaStyles.pizza_card_bgr}>
                            <img src={product.image}
                                 alt="picture of pizza"
                                 className={pizzaStyles.pizza_img}/>
                            <h2 className={pizzaStyles.pizza_title}>{product.name}</h2>
                            <p className={pizzaStyles.pizza_text}>
                                {product.description}
                            </p>
                            <p className={pizzaStyles.pizza_price }>{product.price} сом</p>
                            <div className={pizzaStyles.pizza_btn}>
                                <button
                                    className={pizzaStyles.pizza_minus_btn}
                                    onClick={() => changeCountDecrement(product.id)}>
                                    <svg width="16" height="3" viewBox="0 0 16 2" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                                    </svg>
                                </button>
                                {product.count || 1}
                                <button
                                    className={pizzaStyles.pizza_plus_btn}
                                    onClick={() => changeCountIncrement(product.id)}>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16.4802L8 0.381835" stroke="#FF583E"/>
                                        <path d="M0 8.43091L16 8.43091" stroke="#FF583E"/>
                                    </svg>
                                </button>
                            </div>
                            <button
                                className={pizzaStyles.pizza_korzina_btn}
                                onClick={() => addProductsToLS(product.id)}>
                                В корзину
                            </button>
                        </div>
                    </div>
                ))}
            </ul>
            <button className={pizzaStyles.pizzaMoreBtn}>Показать еще</button>
        </div>
    );
}

export default MenuPage;