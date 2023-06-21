import React , {useContext} from 'react';
import {Link, useParams} from "react-router-dom";

import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetail = () => {

    const params = useParams();
    const id = params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image , title , description , category , price  } = product;


    return (
        <div style={{display:'flex', justifyContent:"space-between" , gap : "50px"}}>
            <div>
                <img src={image} style={{ width:"400px"}} />
            </div>
            <div>
                <h3>title : {title}</h3>
                <p>{description}</p>
                <p>category : {category} </p>
                <div>
                    <span>price : {price} $</span>
                </div>
                <div>
                    <Link to='/products' >Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;