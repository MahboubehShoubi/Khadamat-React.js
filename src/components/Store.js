import React , { useContext } from 'react';

//component
import Product from './share/Product';
import HeaderPages from './HeaderPages';
import Footer from './Footer';
import Navbar from './Navbar';

//context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);
    return (
        <>
            <HeaderPages part1="OUR" part2="PRODUCTS" part3="OUR PRODUCT" />
            <Navbar />
            <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-between" , padding: "50px"}}>

                {products.map(product => <Product key={product.id}  productData={product} /> )}

            </div>
            <Footer />

        </>
        
    );
};

export default Store;