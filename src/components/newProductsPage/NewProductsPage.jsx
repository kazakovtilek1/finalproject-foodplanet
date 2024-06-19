import React, {useEffect} from 'react';
import burgerStyles from './newProductsPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    getProductsType,
    filtered,
    incrementProductCount,
    decrementProductCount,
    addToLocalStorage,
    setCurrentProductType,
} from "../../store/productCountSlice";




function NewProductsPage() {
    const {productTypes, allProducts, currentProductType} = useSelector((store) => store.productTypeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsType());
        dispatch(filtered(currentProductType));
    }, [currentProductType]);


    const handleFilter = (id) => {
        dispatch(setCurrentProductType(id));
    };

    const changeCountIncrement = (productId) => {
        dispatch(incrementProductCount({ productId }));
    };

    const changeCountDecrement = (productId) => {
        dispatch(decrementProductCount({ productId }));
    };

    const addProductsToLSFn = (productId) => {
        dispatch(addToLocalStorage({ productId }));
    };

    return (
        <div>
            <ul className={burgerStyles.burger_pages}>
                <p className={burgerStyles.burger_news_txt}>Новинки</p>
                {productTypes && productTypes.map(type => (
                    <button className={burgerStyles.burger_pages_li_btn}
                            onClick={() => handleFilter(type.id)} key={type.id}>
                        <p className={burgerStyles.burger_pages_li}>{type.title}</p>
                    </button>
                ))}
            </ul>

            <ul className={burgerStyles.burger_card}>
                {allProducts && allProducts.map((product) => (
                    <div key={product.id}>
                        <div className={burgerStyles.burger_card_bgr}>
                            <img src={product.image}
                                 alt="picture of burger"
                                 className={burgerStyles.burger_img}/>
                            <h2 className={burgerStyles.burger_title}>{product.name}</h2>
                            <p className={burgerStyles.burger_text}>
                                {product.description}
                            </p>
                            <p className={burgerStyles.burger_price}>{product.price}</p>
                            <div className={burgerStyles.burger_btn}>
                                <button
                                    className={burgerStyles.burger_minus_btn}
                                    onClick={() => changeCountDecrement(product.id)}>
                                    <svg width="16" height="3" viewBox="0 0 16 2" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                                    </svg>
                                </button>
                                {product.count || 0}
                                <button
                                    className={burgerStyles.burger_plus_btn}
                                    onClick={() => changeCountIncrement(product.id)}>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16.4802L8 0.381835" stroke="#FF583E"/>
                                        <path d="M0 8.43091L16 8.43091" stroke="#FF583E"/>
                                    </svg>
                                </button>
                            </div>
                            <button
                                className={burgerStyles.burger_korzina_btn}
                                onClick={() => addProductsToLSFn(product.id)}>
                                В корзину
                            </button>
                        </div>
                    </div>))}
            </ul>
        </div>
    );
}

export default NewProductsPage;