import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//CSS
import Styles from "../css/HeaderPages.module.css";

//Imags
import Logo from "../image/logo/khadamat-logo.png";
import Logo2 from "../image/logo/logo-khadamat.png";

//Icons
import FindUs from "../assets/icons/map.svg";
import Email from "../assets/icons/email.svg";
import Call from "../assets/icons/ui-call.svg";
import FaceBook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import Youtube from "../assets/icons/youtube-play.svg";
import GooglePlus from "../assets/icons/google-plus.svg";
import Search from "../assets/icons/search.svg";
import Home from "../assets/icons/home.svg";

const HeaderPages = (props) => {
    const {part1 , part2 , part3} = props;
    return (
        <div>

            <header>
                <Container fluid>
                    <Row className={Styles.header}>
                        <Col md={2} lg={2} className={Styles.logo}>
                            <a href="../../index.html">
                                <img src={Logo} /></a>
                        </Col>

                        <Col xs={9} sm={9} md={8} lg={8}>
                            <Row className={Styles.communication}>

                                <Col>
                                    <section className={Styles.item1}>
                                        <section>
                                            <img src={FindUs} className={Styles.icofontMap} />
                                        </section>
                                        <section className={Styles.itemRightText}>
                                            <span>Find Us</span>
                                            <span>325 admirat unit,North cost,USA</span>
                                        </section>
                                    </section>
                                </Col>

                                <Col>
                                    <section className={Styles.item2}>
                                        <section>
                                            <img src={Email} className={Styles.icofontEmail} />
                                        </section>
                                        <section className={Styles.itemRightText}>
                                            <span>Email</span>
                                            <span>admin@bbbbbbbb.com</span>
                                        </section>
                                    </section>
                                </Col>

                                <Col>
                                    <section className={Styles.item3}>
                                        <section>
                                            <img src={Call} className={Styles.icofontUiCall} />
                                        </section>
                                        <section className={Styles.itemRightText}>
                                            <span>call us now</span>
                                            <span>0123456789</span>
                                        </section>
                                    </section>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={3} sm={3} md={2} lg={2} className={Styles.getQuote}>
                            <a href="#">Get A Quote</a>
                        </Col>

                    </Row>
                </Container>


                {/* ----------------------------- Navbar----------------------------- */}

                <Navbar expand="md">
                    <Container className={Styles.navbar}>
                        <Navbar.Brand  className={Styles.logo2}>
                            <Link to='/'>
                                <img src={Logo2}/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={Styles.hamburgerMenu}/>
                        <Navbar.Collapse id="basic-navbar-nav" className={Styles.navCollapse}>
                            <section className={Styles.navLeft}>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><a href="#">Services</a></li>
                                    <li><Link to="/project">Works</Link></li>
                                    <li><Link to="/products">Shop</Link></li>
                                    <li><a href="#">Pages</a></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </section>


                            <section className={Styles.navRight}>
                                <ul>
                                    <li><a href="#"><img src={FaceBook} /></a></li>
                                    <li><a href="#"><img src={twitter} /></a></li>
                                    <li><a href="#"><img src={GooglePlus} /></a></li>
                                    <li><a href="#"><img src={Youtube} /></a></li>
                                    <li><a href="#"><img src={Search} /></a></li>
                                </ul>
                            </section>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* <!---------------------  Main Header ------------------> */}

                <Row className={Styles.headerMain}>
                    <Col xs={12} sm={12} md={10} lg={10} className={Styles.headerLeft}>
                        <span> {part1} </span>
                        <span> {part2} </span>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} className={Styles.headerRight}>
                        <img src={Home} alt="HomeIcon"/>
                        <Link to="/main">Home</Link>
                        <span> / </span>
                        <a href="#" className={Styles.rightLink}> {part3} </a>
                    </Col>

                </Row>
            </header>

        </div>
    );
};

export default HeaderPages;