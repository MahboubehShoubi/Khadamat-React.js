import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



//Context
import { CartContext } from '../context/CartContextProvider';

//CSS
import Styles from "../css/Navbar.module.css";

//Icons
import ShopIcon from "../assets/icons/shop.svg"

const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <Container fluid className={Styles.navbarContainer}>
            <Link to="/cart" className={Styles.navbarMain}>
                <img src={ShopIcon} alt='shop' />
                {
                    state.itemsCounter > 0 && <span className={Styles.itemsCounter}>{state.itemsCounter}</span>
                }
            </Link>
        </Container>


    );
};

export default Navbar;