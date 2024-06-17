import React, {useEffect} from 'react';
import burgerStyles from './newsPage.module.css';
import plus_img from './imgNews/plus.svg';
import minus_img from './imgNews/minus.svg';
import {useDispatch, useSelector} from "react-redux";
import {
    setAllProducts,
    setProductTypes,
    incrementProductCount,
    decrementProductCount,
    addToLocalStorage
} from "../../store/productCountSlice";
import axios from "axios";



function NewsPage() {
    const {productTypes, allProducts} = useSelector((store) => store.productsMain);
    const dispatch = useDispatch();


    const getProductsType = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/productTypes`)
            dispatch(setProductTypes(response.data));
        }
        catch (error){
            console.log(error)
        }

    }

    const filtered = async (id) => {
        try{
            const response = await axios.get(`http://localhost:8000/allProducts?productType=${id}&news=true`)
            dispatch(setAllProducts(response.data));
        }
        catch (error){
            console.log(error)
        }

    }

    useEffect(() => {
        getProductsType()
        filtered(1)
    }, [dispatch]);


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
                            onClick={() => filtered(type.id)} key={type.id}>
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
                                    onClick={() => changeCountDecrement(product.id)}>
                                    <img src={minus_img} alt="minus_img"/>
                                </button>
                                    {product.count || 0}
                                <button
                                    className={burgerStyles.burger_plus_btn}
                                    onClick={() => changeCountIncrement(product.id)}>
                                    <img src={plus_img} alt="plus_img"/>
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

export default NewsPage;