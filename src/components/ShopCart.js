import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from "../context/CartContextProvider";

//component
import Cart from './share/Cart';

const ShopCart = () => {

    const {state , dispatch} = useContext(CartContext);
    return (
        <div style={{display:"flex" , justifyContent:"space-between" , gap :"30px" , padding:"100px"}}>
            <div>
                {
                state.selectedItems.map(item => <Cart key={item.id} data={item} /> )
                }
            </div>

            <div>
                <span>Total Counter : {state.itemsCounter}</span><br />
                <span>total payment : {state.total}</span>
                <div>
                    <button onClick={() => dispatch({type : "CHECKOUT"})}>CHECK OUT</button>
                    <button onClick={() => dispatch({type : "CLEAR"})}>CLEAR</button>

                </div>

                {
                state.checkout && <div>
                    <h3>Checked out Successfuly</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>want Buy?</h3>
                    <Link to="/products">Back to Shop</Link>
                </div>
            }
            </div>            
        </div>
    );
};

export default ShopCart;