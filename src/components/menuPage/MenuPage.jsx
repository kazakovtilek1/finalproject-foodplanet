import React, {useEffect} from 'react';
import pizzaStyles from './menuPage.module.css';
import burgerStyles from '../newProductsPage/newProductsPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    addToLocalStorage,
    decrementProductCount,
    filtered,
    getProductsType,
    incrementProductCount,
    setCurrentProductType
} from "../../store/productCountSlice";
import button from "bootstrap/js/src/button";


function MenuPage() {
    const {productTypes, allProducts, currentProductType} = useSelector((store) => store.productTypeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsType());
        dispatch(setCurrentProductType(1));
        dispatch(filtered(1))
    }, [dispatch]);

    //
    // useEffect(() => {
    //     if (currentProductType !== null) {
    //         dispatch(filtered(currentProductType));
    //     }
    // }, [currentProductType, dispatch]);

    const handleFilter = (id) => {
        dispatch(setCurrentProductType(id));
    };

    const changeCountIncrement = (productId) => {
        dispatch(incrementProductCount({ productId }));
    };

    const changeCountDecrement = (productId) => {
        dispatch(decrementProductCount({ productId }));
    };

    const addProductsToLS = (productId) => {
        dispatch(addToLocalStorage({ productId }));
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

            <ul className={pizzaStyles.pizza_card}>
                {allProducts && allProducts.map((product) => (
                    <div key={product.id}
                    className={currentProductType === 1 ? pizzaStyles.pizza_card_bgr : burgerStyles.burger_card_bgr}>
                        <div className={pizzaStyles.pizza_card_bgr}>
                            <img src={product.image}
                                 alt="picture of pizza"
                                 className={pizzaStyles.pizza_img}/>
                            <h2 className={currentProductType === 1 ? pizzaStyles.pizza_title : burgerStyles.burger_title}>{product.name}</h2>
                            <p className={currentProductType === 1 ? pizzaStyles.pizza_text : burgerStyles.burger_text}>
                                {product.description}
                            </p>
                            <p className={currentProductType === 1 ? pizzaStyles.pizza_price : burgerStyles.burger_price}>{product.price}</p>
                            <div className={currentProductType === 1 ? pizzaStyles.pizza_btn : burgerStyles.burger_btn}>
                                <button
                                    className={pizzaStyles.pizza_minus_btn}
                                    onClick={() => changeCountDecrement(product.id)}>
                                    <svg width="16" height="3" viewBox="0 0 16 2" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                                    </svg>
                                </button>
                                {product.count || 0}
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