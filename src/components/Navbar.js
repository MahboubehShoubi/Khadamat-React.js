import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

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