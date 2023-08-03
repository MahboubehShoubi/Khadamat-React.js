import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//Image
import HEXAGON from "../assets/images/brand-logo/brand-logo-4.png";
import PlusInfinity from "../assets/images/brand-logo/brand-logo-2.png";
import TranSport from "../assets/images/brand-logo/brand-logo-3-1.png";


//CSS
import Styles from "../css/Brand.module.css";

const Brand = () => {
    return (
        <Container fluid className={Styles.brandContainer}>
            <Row className={Styles.BrandSection}>
                <Col className={Styles.BrandSectionBox}>
                    <img src={HEXAGON}/>
                </Col>

                <Col className={Styles.BrandSectionBox}>
                    <img src={PlusInfinity}/>
                </Col>

                <Col className={Styles.BrandSectionBox}>
                    <img src={TranSport}/>
                </Col>

                <Col className={Styles.BrandSectionBox}>
                    <img src={PlusInfinity}/>
                </Col>
            </Row>
        </Container>

    );
};

export default Brand;