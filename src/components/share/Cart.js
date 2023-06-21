import React  , { useContext } from 'react';

//Contect
import { CartContext } from '../../context/CartContextProvider';

//function
import { ShortTittles } from "../../functions/helpers";

//Icon
import RemoveIcon from "../../assets/icons/trash.svg";

const Cart = ({data}) => {

    const {state , dispatch} = useContext(CartContext);
    return (
        <div>
            <div>
                 <img src={data.image} alt='product' style={{width:"300px"}} />
                 <div>
                     <span>{ShortTittles(data.title)}</span><br />
                     <span>{data.price}</span><br />
                 </div>
                 <span>{data.quantity}</span>
                 <div>
                    { data.quantity > 1 ? 
                       <button onClick={() => dispatch({type:"DECREASE" , payload: data})}>-</button> :
                       <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload: data})}><img src={RemoveIcon} alt='product' style={{width :"13px"}} /></button>
                     }
                     <button onClick={() => dispatch({type:"INCREASE" , payload:data})}>+</button>
                 </div>
            </div>
                
        </div>
    );
};

export default Cart;