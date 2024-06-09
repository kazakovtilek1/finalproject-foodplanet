import React, {useEffect} from 'react';
import burgerStyles from './burgersPage.module.css';
import plus_img from './/imgBurger/plus.png';
import minus_img from './/imgBurger/minus.png';
import {useSelector, useDispatch} from "react-redux";
import {
    setAllProducts,
    incrementProductCount,
    decrementProductCount,
    addToLocalStorage,
} from "../../store/productCountSlice";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";




function BurgersPage() {
    const dispatch = useDispatch();
    const allProducts = useSelector((store) => store.productType.allProducts);
    const location = useLocation();
    const navigate = useNavigate();


    const getProducts = async (productType) => {
        try {
            const response = await axios.get(`http://localhost:8000/allProducts?productType=${productType}`);
            const data = response.data;
            console.log('Response data:', data);
            dispatch(setAllProducts(data));
        } catch (error) {
            console.error("Error", error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const productType = params.get("productType");

        if (productType) {
            getProducts(productType);
        } else {
            navigate('?productType=2');
        }
    }, [location.search, navigate, dispatch]);

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
        <div className={burgerStyles.burger_card}>
            {allProducts.map((product) => (
                <div key={product.id}>
                    <div className={burgerStyles.burger_card_bgr}>
                        <img
                            src={product.image}
                            alt="picture of burger"
                            className={burgerStyles.burger_img}
                        />
                        <h2 className={burgerStyles.burger_title}>{product.name}</h2>
                        <p className={burgerStyles.burger_text}>
                            {product.description}
                        </p>
                        <p className={burgerStyles.burger_price}>{product.price}</p>
                        <div className={burgerStyles.burger_btn}>
                            <button
                                className={burgerStyles.burger_minus_btn}
                                onClick={() => changeCountDecrement(product.id)}
                            >
                                <img src={minus_img} alt="minus_img"/>
                            </button>
                            {product.count || 0}
                            <button
                                className={burgerStyles.burger_plus_btn}
                                onClick={() => changeCountIncrement(product.id)}
                            >
                                <img src={plus_img} alt="plus_img"/>
                            </button>
                        </div>
                        <button
                            className={burgerStyles.burger_korzina_btn}
                            onClick={() => addProductsToLSFn(product.id)}
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BurgersPage;



