import React , { useContext } from 'react';
import Container from "react-bootstrap/Container";

//component
import Product from './share/Product';
import HeaderPages from './HeaderPages';
import Footer from './Footer';
import Navbar from './Navbar';

//context
import { ProductsContext } from '../context/ProductContextProvider';

//CSS
import Styles from "../css/Store.module.css";

const Store = () => {

    const products = useContext(ProductsContext);
    return (
        <>
            <HeaderPages part1="OUR" part2="STORE" part3="Shopping" />
            <Navbar />
            <Container fluid className={Styles.container}>
                <div className={Styles.storeContainer}>
                    {products.map(product => <Product key={product.id}  productData={product} /> )}
                </div>
            </Container>

            <Footer />

        </>
        
    );
};

export default Store;