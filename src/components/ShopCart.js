import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";


//Context
import { CartContext } from "../context/CartContextProvider";

//component
import Cart from './share/Cart';
import HeaderPages from "./HeaderPages";


//CSS
import Styles from "../css/ShopCart.module.css";

//Icons
import CaretRight from "../assets/icons/caret-right2.svg";

const ShopCart = () => {

    const {state , dispatch} = useContext(CartContext);
    return (
        <>
            <HeaderPages part1="SHOPPING" part2="CART" part3="CART" />
            <Container fluid className={Styles.container}>
                <div className={Styles.productDetail}>
                    {
                        state.itemsCounter > 0 && <Link to="/products" className={Styles.linkToStore}>Back to Shop <img src={CaretRight} alt="caretRight"/></Link>
                    }

                    {
                        state.selectedItems.map(item => <Cart key={item.id} data={item} /> )
                    }
                </div>

                <div className={Styles.productHandler}>
                    <div className={Styles.productHandlerTotal}>
                        <span>Total Counter : <span className={Styles.productResult}>{state.itemsCounter}</span></span>
                        <span>Total payment : <span className={Styles.productResult}>{state.total}</span></span>
                    </div>
                    <div className={Styles.productHandlerBtn}>
                        <button className={Styles.checkout} onClick={() => dispatch({type : "CHECKOUT"})}>CHECK OUT</button>
                        <button className={Styles.clear} onClick={() => dispatch({type : "CLEAR"})}>CLEAR</button>

                    </div>

                    {
                        state.checkout && <div className={Styles.buyMore}>
                            <h4>Checked out Successfuly</h4>
                            <Link to="/products">Buy More</Link>
                        </div>
                    }

                    {
                        !state.checkout && state.itemsCounter === 0 && <div className={Styles.backToShop}>
                            <h4>want Buy?</h4>
                            <Link to="/products">Back to Shop</Link>
                        </div>
                    }


                </div>
            </Container>
        </>
    );
};

export default ShopCart;