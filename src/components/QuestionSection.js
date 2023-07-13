import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import Styles from "../css/QuestionSection.module.css";

//Image
import backgroundImage from "../image/Images/consultants.png";

const QuestionSection = () => {
    return (
        <div>
            <Container fluid>
                <section className={Styles.container}>
                    <Row className={Styles.topSection}>
                        <h4>WE ALWAYS HELP YOU</h4>
                        <p>Request a Quote</p>
                    </Row>
                    <Row className={Styles.bottomSection}>
                        <Col xs={12} sm={12} md={3} lg={3} className={Styles.bottomLeft}>
                            <img src={backgroundImage} alt="contact"/>
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={7} >
                            <form className={Styles.bottomRightForm}>
                                <input type="text" placeholder="Your Name *"/>
                                <select>
                                    <option>I would like to discuss</option>
                                </select>
                                <input type="email" placeholder="Your Email"/>
                                <input type="tel" placeholder="Your Phone Number *"/>
                                <button className={Styles.submitBtn} type="submit">submit Now</button>
                            </form>

                        </Col>
                    </Row>
                </section>
            </Container>
            
        </div>
    );
};

export default QuestionSection;