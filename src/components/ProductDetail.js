import React , {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Content
import { ProductsContext } from '../context/ProductContextProvider';

//CSS
import Styles from "../css/ProductDetail.module.css";

const ProductDetail = () => {

    const params = useParams();
    const id = params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image , title , description , category , price  } = product;


    return (
        <Container fluid className={Styles.container}>
            <Row className={Styles.productDetailContainer}>
                <div className={Styles.productImg}>
                    <img src={image} />
                </div>
                <div className={Styles.productDetail}>
                    <h3>{title}</h3>
                    <p className={Styles.description}>{description}</p>
                    <p>category : {category} </p>
                    <div>
                        <span className={Styles.price}>price : {price} $</span>
                    </div>
                    <div>
                        <Link to='/products' className={Styles.backToShop} >Back to Shop</Link>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default ProductDetail;