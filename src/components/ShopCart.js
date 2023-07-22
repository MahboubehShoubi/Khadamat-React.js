import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Context
import { CartContext } from "../context/CartContextProvider";

//component
import Cart from './share/Cart';

//CSS
import Styles from "../css/ShopCart.module.css";

const ShopCart = () => {

    const {state , dispatch} = useContext(CartContext);
    return (
        <Container fluid className={Styles.container}>
            <div className={Styles.productDetail}>
                {
                state.selectedItems.map(item => <Cart key={item.id} data={item} /> )
                }
            </div>

            <div className={Styles.productHandler}>
                <span>Total Counter : <span className={Styles.productResult}>{state.itemsCounter}</span></span>
                <span>total payment : <span className={Styles.productResult}>{state.total}</span></span>
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
    );
};

export default ShopCart;