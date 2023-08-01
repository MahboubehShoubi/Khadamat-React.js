import React from 'react';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//CSS
import Styles from "../css/Footer.module.css";

//Images
import background from "../image/background-Image/Architecture-01.png";
import MapLocation from "../image/map/maps-location.png";

//Icons
import IconLocation from "../assets/icons/location-pin.svg";
import EmailIcon from "../assets/icons/email.svg";
import SupportIcon from "../assets/icons/support.svg";
import CallIcon from "../assets/icons/ui-call.svg";
import Youtube from "../assets/icons/youtube-play.svg";
import Facebook from "../assets/icons/facebook.svg";
import twitter from '../assets/icons/twitter.svg';
import googlePlus from '../assets/icons/google-plus.svg';
import arrowRight from '../assets/icons/caret-right.svg';

const Footer = () => {
    return (
        <div>
            <Container fluid>
                <footer className={Styles.footer}>
                    <img className={Styles.backgroundImage} src={background} alt={background} />

                    {/*!------------------ TOP FOOTER ------------------------->*/}

                    <Row className={Styles.footerTop}>

                        {/*---------- Item1 -----------------*/}
                        <Col xs={12} sm={12} md={6} lg={3}  className={Styles.footerTopItem}>
                            <section className={Styles.footerItem1}>
                                <h3 className={Styles.footerItemHeader}>Company in Lines<span>.</span></h3>
                                <p>The lysine contingency - it's intended to prevent the spread
                                    of the animals is case they ever got off the island.
                                    Dr. Wu inserted a gene that makes.</p>
                                <ul className={Styles.socialMediaFooter}>
                                    <li><a href="#"><img src={Facebook} alt='facebook'/></a></li>
                                    <li><a href="#"><img src={twitter} alt='twitter'/></a></li>
                                    <li><a href="#"><img src={googlePlus} alt='googlePlus'/></a></li>
                                    <li><a href="#"><img src={Youtube} alt='youtube'/></a></li>
                                </ul>
                            </section>
                        </Col>

                        {/*----------------- item2 --------------*/}
                        <Col xs={12} sm={12} md={6} lg={3} className={Styles.footerTopItem}>
                            <section className={Styles.footerItem2}>
                                <h3 className={Styles.footerItemHeader}>Head Office<span>.</span></h3>
                                <section className={Styles.footerItem2Box}>
                                    <section>
                                        <img src={IconLocation} alt='location'/>
                                        <a href="#">1422 Aqua blue Road st.aaaaaaaaa</a>
                                    </section>

                                    <section>
                                        <img src={EmailIcon} alt='email'/>
                                        <a href="#">admin@email.com</a>
                                    </section>

                                    <section>
                                        <img src={SupportIcon} alt='support'/>
                                        <a href="#">support@email.com</a>
                                    </section>

                                    <section>
                                        <img src={CallIcon} alt="call"/>
                                        <a href="#">0123456789</a>
                                    </section>
                                </section>
                            </section>
                        </Col>

                        {/*----------------- item3 -----------------*/}
                        <Col xs={12} sm={12} md={6} lg={3} className={Styles.footerTopItem}>
                            <section className={Styles.footerItem3}>
                                <h3 className={Styles.footerItemHeader}>Company Links<span>.</span></h3>
                                <section className={Styles.footerItem3Box}>
                                    <section>
                                        <a href="#"><img src={arrowRight} alt='arrow'/>Our History</a>
                                    </section>
                                    <section>
                                        <a href="#"><img src={arrowRight} alt='arrow'/>Mission & Vision</a>
                                    </section>

                                    <section>
                                        <a href="#"><img src={arrowRight} alt='arrow'/>Services</a>
                                    </section>

                                    <section>
                                        <a href="#"><img src={arrowRight} alt='arrow'/>Projects</a>
                                    </section>

                                    <section>
                                        <a href="#"><img src={arrowRight} alt='arrow'/>Our Team</a>
                                    </section>

                                    <section>
                                        <a href="#"><img src={arrowRight} alt='arrow'/>Testimonials</a>
                                    </section>

                                </section>
                            </section>
                        </Col>

                        {/*----------------- item4 -----------------------*/}
                        <Col xs={12} sm={12} md={6} lg={3} className={Styles.footerTopItem}>
                            <section className={Styles.footerItem4}>
                                <h3 className={Styles.footerItemHeader}>Our Branches<span>.</span></h3>
                                <section>
                                    <img src={MapLocation} />
                                </section>
                            </section>

                        </Col>

                    </Row>

                    {/*----------------------------- BOTTOM FOOTER ----------------------*/}
                    <Row className={Styles.footerBottom}>
                        <Col xs={12} sm={12} md={9} lg={9} className={Styles.footerBottomRight}>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/project">Works</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Col>

                        <Col  xs={12} sm={12} md={3} lg={3} className={Styles.footerBottomLeft}>
                            <p>©2023 - Powered By <span>M.Shoubi</span></p>
                        </Col>
                    </Row>
                </footer>
            </Container>

        </div>
    );
};

export default Footer;