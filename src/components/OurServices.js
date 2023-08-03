import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import Styles from "../css/OurServices.module.css";

//images SVG
import backgroundImage from "../assets/images/background-Image/services-bg-home.png"
import CONSTRUCTION from "../assets/icons/CONSTRUCTION.svg";
import ARCHITECTURE from "../assets/icons/ARCHITECTURE.svg";
import PLANNING from "../assets/icons/PLANNING.svg";
import INTERIOR from "../assets/icons/INTERIOR DESIGN.svg";
import MODERN from "../assets/icons/MODERN DESIGN.svg";
import RENOVATION from "../assets/icons/RENOVATION.svg";
import CONSULTING from "../assets/icons/CONSULTING.svg";
import MAINTENANCE from "../assets/icons/MAINTENANCE.svg";

const OurServices = () => {
    return (
        <div>
            <Container fluid>
                <Row className={Styles.container}>
                    <img className={Styles.backgroundImage} src={backgroundImage} alt="background"/>
                    <Col className={Styles.textTop}>
                        <h2>OUR SERVICES</h2>
                        <p>What We Do</p>
                    </Col>

                    <Col>
                        <Row className={Styles.bottom}>
                            <Col  xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={CONSTRUCTION} alt="CONSTRUCTION"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>01 </span>
                                    <span>CONSTRUCTION</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={ARCHITECTURE} alt="ARCHITECTURE"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>02 </span>
                                    <span>ARCHITECTURE</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={PLANNING} alt="PLANNING"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>03 </span>
                                    <span>PLANNING</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={INTERIOR} alt="INTERIOR"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>04 </span>
                                    <span>INTERIOR DESIGN</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={MODERN} alt="MODERN"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>05 </span>
                                    <span>MODERN DESIGN</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={RENOVATION} alt="RENOVATION"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>06 </span>
                                    <span>RENOVATION</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={CONSULTING} alt="CONSULTING"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>07 </span>
                                    <span>CONSULTING</span>
                                </section>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.Box}>
                                <section className={Styles.Image}>
                                    <img src={MAINTENANCE} alt="MAINTENANCE"/>
                                </section>
                                <section className={Styles.Description}>
                                    <span>08 </span>
                                    <span>MAINTENANCE</span>
                                </section>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>


            
        </div>
    );
};

export default OurServices;