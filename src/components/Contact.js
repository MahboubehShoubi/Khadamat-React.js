import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Component
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";

//CSS
import Styles from "../css/Contact.module.css";

//Image
import MapImage from "../assets/images/map/vt.png";
import MapImage1 from "../assets/images/map/vt (1).png";
import MapImage2 from "../assets/images/map/vt (2).png";
import MapImage3 from "../assets/images/map/vt (3).png";
import MapImage4 from "../assets/images/map/vt (4).png";
import MapImage5 from "../assets/images/map/vt (5).png";

//Icon
import Email from "../assets/icons/email.svg";
import facebook from "../assets/icons/facebook2.svg";
import googleplus from "../assets/icons/google-plus2.svg";
import twitter from "../assets/icons/twitter2.svg";
import youtube from "../assets/icons/youtube-play2.svg";

const Contact = () => {
    return (
        <>
            {/*----------------- HEADER ---------------------------*/}
            <HeaderPages part1="CONTACT" part2="US" part3="CONTACT US" />


            {/*------------------ MAIN -------------------------*/}
            <Container fluid className={Styles.mainContact}>

                <Row className={Styles.AddressMap}>

                    <Col className={Styles.boxAddress}>

                        <h3>Sagrada Familia, spain</h3>
                        <p className={Styles.informationCompany}>178 ipsum dolor sit , consectet adipisi elit,
                            sed do eiusmod tempor for Sagrada Familia, Barcelona, Espania</p>
                        <p className={Styles.callTel}>+34 00 125 456 872</p>
                        <section className={Styles.boxEmail}>
                            <img src={Email} className={Styles.icofontEmail} />
                            <span>aaaa@bbbb.com</span>
                        </section>
                        <section className={Styles.socialMedia}>
                            <ul>
                                <li><a href="#"><img src={facebook}  alt="Icon" className={Styles.IconContact} /></a></li>
                                <li><a href="#"><img src={twitter}  alt="Icon" className={Styles.IconContact} /></a></li>
                                <li><a href="#"><img src={googleplus}  alt="Icon" className={Styles.IconContact} /></a></li>
                                <li><a href="#"><img src={youtube} alt="Icon" className={Styles.IconContact} /></a></li>
                            </ul>
                        </section>
                    </Col>

                    <Col className={Styles.boxMap}>
                        <img src={MapImage} alt="ImageMap"/>
                        <img src={MapImage3} alt="ImageMap"/>
                        <img src={MapImage5} alt="ImageMap"/>
                        <img src={MapImage2} alt="ImageMap"/>
                        <img src={MapImage1} alt="ImageMap"/>
                        <img src={MapImage4} alt="ImageMap"/>
                    </Col>

                </Row>


                {/*!--------------------- SEND MESSAGE ------------------------>*/}

                <Row className={Styles.boxMessage}>
                    <p>HAVE A QUESTION?</p>
                    <h1>Send Message</h1>
                    <form onSubmit="sendMessageHandler" className={Styles.formSendMessage}>
                        <section>
                            <input type="text" placeholder="Full name" />
                            <input type="email" placeholder="Email Address" />
                            <input type="text" placeholder="Subject" />
                        </section>
                        <textarea placeholder="Comment"></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </Row>

            </Container>

        {/*----------------- FOOTER-------------------*/}
            < Footer />
        </>
    );
};

export default Contact;