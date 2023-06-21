import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../context/CartContextProvider';

//Icons
import ShopIcon from "../assets/icons/shop.svg"

const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <div>

            <div>
                <div>
                    <Link to="/cart" ><img src={ShopIcon} alt='shop' /></Link>
                    
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;