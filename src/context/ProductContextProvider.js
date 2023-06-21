import React , {useState , useEffect , createContext} from 'react';

import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {

    const [products , setProducts] = useState([]);

useEffect( ()=>{
    const fetchAPI = async() =>{
        setProducts(await getProducts());
    }

    fetchAPI();

} , [])


    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;