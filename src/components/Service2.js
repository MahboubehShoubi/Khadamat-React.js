import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";
import Brand from "./Brand";

//CSS
import Styles from "../css/Service2.module.css";

//Icons
import Service2_1 from "../assets/images/services/service-02/icon/servive2 (1).svg";
import Service2_2 from "../assets/images/services/service-02/icon/servive2 (2).svg";
import Service2_3 from "../assets/images/services/service-02/icon/servive2 (3).svg";
import Service2_4 from "../assets/images/services/service-02/icon/servive2 (4).svg";
import Service2_5 from "../assets/images/services/service-02/icon/servive2 (5).svg";
import Service2_6 from "../assets/images/services/service-02/icon/servive2 (6).svg";
import Service2_7 from "../assets/images/services/service-02/icon/servive2 (7).svg";
import Service2_8 from "../assets/images/services/service-02/icon/servive2 (8).svg";
import Service2_9 from "../assets/images/services/service-02/icon/servive2 (9).svg";









const Service2 = () => {
    return (
        <>

{/*-------------------------------- Header -------------------------------*/}
            <HeaderPages part1="OUR" part2="SERVICES" part3="SERVICES" />


 {/*---------------------------------- Container ------------------------*/}
            <Container fluid className={Styles.container}>
                <Row xs={1} lg={3} className={Styles.serviceInfo}>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_1}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_2}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_3}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_4}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_5}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_6}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_7}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_8}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>

                    <Col className={Styles.serviceInfoBox}>
                        <img src={Service2_9}/>
                        <h5>Sewer Lines</h5>
                        <p>The lysine contingency it's intended to
                            meets prevent the spread off the animals is
                            castels they ever got off the island. Dr.
                            Wueselmn me inserted a gene that makes single</p>
                        <a href="#">Learn More</a>
                    </Col>
                </Row>


                {/*---------------------------- Request a Quote -----------------------------*/}
                <Row className={Styles.requestBox}>
                    <Form className={Styles.service2Form}>
                        <div>
                            <p>WE HERE FOR HELPING YOU</p>
                            <h4>Request a Quote</h4>
                        </div>
                        <Form.Control type="text" placeholder="Your Name *" />
                        <Form.Control type="text" placeholder="Date *" />
                        <Form.Control type="email" placeholder="Your Email *" />
                        <Form.Control type="tel" placeholder="Your Phone Number *" />
                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </Row>

            </Container>


 {/*-------------------------- Component Brand -------------------------*/}
            <Brand />


{/*-------------------------------- Footer ---------------------------------*/}
            <Footer />
        </>
    );
};

export default Service2;