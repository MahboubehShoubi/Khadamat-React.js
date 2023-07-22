import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Context
import { CartContext } from '../context/CartContextProvider';

//CSS
import Styles from "../css/Navbar.module.css";

//Icons
import ShopIcon from "../assets/icons/shop.svg"

const Navbar = () => {

    const {state} = useContext(CartContext);
    return (

            <div>
                <div className={Styles.navbarContainer}>
                    <Link to="/cart" ><img src={ShopIcon} alt='shop' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>

    );
};

export default Navbar;