import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//function
import { ShortTittles , isInCart , quantitycount } from '../../functions/helpers';

//Icons
import RemoveIcon from "../../assets/icons/trash.svg";

//CSS
import Styles from "../../css/Product.module.css";


const Product = ({productData}) => {

    const {state,dispatch} = useContext(CartContext);

    return (
        <div className={Styles.productBox}>
            <img src={productData.image} className={Styles.imgProduct} alt='product' />
            <div className={Styles.productDetailBox}>
                <div className={Styles.productHeader}>
                    <h3>{ShortTittles(productData.title)}</h3>
                </div>
                <div className={Styles.productDetail}>
                    <p>{productData.price} $</p>
                    <Link to={`/products/${productData.id}`}>Detail Product</Link>
                </div>
                <div className={Styles.productHandler}>
                    <div className={Styles.btnHandler}>
                        {quantitycount(state , productData.id) > 1 && <button className={Styles.btnDecrease} onClick={() => dispatch({type:"DECREASE" , payload:productData})}>-</button> }
                        {quantitycount(state , productData.id) === 1 && <button className={Styles.delProduct} onClick={() => dispatch({type:"REMOVE_ITEM" , payload:productData})}><img src={RemoveIcon} /></button> }
                        {
                            isInCart(state , productData.id) ?
                                <button className={Styles.btnIncrease} onClick={() => dispatch({type : "INCREASE" , payload : productData})}>+</button> :
                                <button className={Styles.addProduct} onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})} >ADD TO CART</button>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;