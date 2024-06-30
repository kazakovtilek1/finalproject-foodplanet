import React, {useEffect} from 'react';
import burgerStyles from '../../styles/newProductsPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    getProductsType,
    fetchNewProducts,
    incrementNewProductCount,
    decrementNewProductCount,
    addToProductLocalStorage,
    setNewProductType,
    setItemCount
} from "../../store/productCountSlice";




function NewProductsPage() {
    const {productTypes, currentNewProductType, newProducts} = useSelector((store) => store.productTypeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsType());
        dispatch(setNewProductType(2));
        dispatch(setItemCount());
    }, [dispatch]);

    useEffect(() => {
        if (currentNewProductType !== null) {
            dispatch(fetchNewProducts(currentNewProductType));
        }
    }, [currentNewProductType, dispatch]);

    const handleFilter = (id) => {
        dispatch(setNewProductType(id));
    };

    const changeCountIncrement = (productId) => {
        dispatch(incrementNewProductCount({ productId }));
        console.log('incr burg', newProducts.find(p => p.id === productId).count);
    };

    const changeCountDecrement = (productId) => {
        dispatch(decrementNewProductCount({ productId }));
    };

    const addProductsToLSFn = (productId) => {
        dispatch(addToProductLocalStorage({ productId }));
        dispatch(setItemCount());
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
                {newProducts && newProducts.map((product) => (
                    <div key={product.id}
                    className={burgerStyles.burger_card_bgr}>
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
                                {product.count || 1}
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