import React  , { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Contect
import { CartContext } from '../../context/CartContextProvider';

//CSS
import Styles from "../../css/Cart.module.css";

//function
import { ShortTittles } from "../../functions/helpers";

//Icon
import RemoveIcon from "../../assets/icons/trash.svg";

const Cart = ({data}) => {

    const {state , dispatch} = useContext(CartContext);

    return (
        <Container fluid className={Styles.cartContainer}>
            <div className={Styles.productCartImg}>
                <img src={data.image} alt='product' />
            </div>
            <div className={Styles.productCartDetail}>
                <div className={Styles.productCartState}>
                    <div className={Styles.productDetail}>
                        <span className={Styles.ShortTittles}>{ShortTittles(data.title)}</span>
                        <span className={Styles.price}>Price : {data.price}</span>
                    </div>
                    <span className={Styles.quantity}>Counter :{data.quantity}</span>

                </div>
                <div className={Styles.btnState}>
                    { data.quantity > 1 ?
                        <button className={Styles.decrease} onClick={() => dispatch({type:"DECREASE" , payload: data})}>-</button> :
                        <button className={Styles.removeItem} onClick={() => dispatch({type:"REMOVE_ITEM" , payload: data})}><img src={RemoveIcon} alt='product' /></button>
                    }
                    <button className={Styles.increase} onClick={() => dispatch({type:"INCREASE" , payload:data})}>+</button>
                </div>
            </div>
        </Container>

    );
};

export default Cart;