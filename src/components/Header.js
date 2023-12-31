import React , { useState } from 'react';
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

//CSS
import Styles from "../css/Header.module.css";

//Imag
import  Logo from "../assets/images/logo/logo-khadamat.png";
import Slider1 from "../assets/images/background-Image/home-slide-1.jpg";
import modalImg from "../assets/images/Images/carpentar-man.png";

//Icons
import FindUs from "../assets/icons/map.svg";
import Email from "../assets/icons/email.svg";
import Call from "../assets/icons/ui-call.svg";
import Shop from "../assets/icons/shop2.svg";
import CaretDown from "../assets/icons/caret-down.svg";
import HamburgerMenu from "../assets/icons/navigation-menu.svg"


const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [showCollapse, setShowCollapse] = useState(false);


    return (
            <Container fluid className={Styles.headerContainer}>
                <Row className={Styles.ImgBackground}>
                    <img src={Slider1} alt="slider" />
                </Row>

                <Row className={Styles.headerTop}>
                    <Col xs={12} sm={12} md={10} lg={10}>
                        <Row className={Styles.communication}>

                            <Col className={Styles.item1}>
                                <section className={Styles.item1}>
                                    <section>
                                        <img src={FindUs} className={Styles.icofontMap} alt="ImgIcons" />
                                    </section>
                                    <section className={Styles.itemRightText}>
                                        <span>Find Us</span>
                                        <span>325 admirat unit, North cost, USA</span>
                                    </section>
                                </section>
                            </Col>

                            <Col className={Styles.item2}>
                                <section className={Styles.item2}>
                                    <section>
                                        <img src={Email} className={Styles.icofontEmail} alt="ImgIcons"/>
                                    </section>
                                    <section className={Styles.itemRightText}>
                                        <span>Email</span>
                                        <span>admin@bbbbbbbb.com</span>
                                    </section>
                                </section>
                            </Col>

                            <Col className={Styles.item3}>
                                <section className={Styles.item3}>
                                    <section>
                                        <img src={Call} className={Styles.icofontUiCall} alt="ImgIcons" />
                                    </section>
                                    <section className={Styles.itemRightText}>
                                        <span>call us now</span>
                                        <span>0123456789</span>
                                    </section>
                                </section>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} sm={12} md={2} lg={2} className={Styles.getQuote} onClick={() => setShowModal(true)}>
                        <a href="#">Get A Quote</a>
                    </Col>
                </Row>

                <Modal className={Styles.modalBoxHeader} show={showModal} onHide={() => setShowModal(false)} aria-labelledby="modal-Box">
                    <Modal.Header closeButton className={Styles.modalHeader}>
                        <section>
                            <img src={modalImg} alt="modalImag"/>
                        </section>
                        <section>
                            <Modal.Title>GET A QUOTE</Modal.Title>
                            <p>Apparently we had reached a great height in the atmosphere,
                                for the sky was a dead black, and the stars had ceased to twinkle.
                                By the same illusion which lifts the horizon of the sea to the level
                                of lopms kiner the spectator on a hill side.
                            </p>
                        </section>
                    </Modal.Header>

                    <Modal.Body>
                        <Form className={Styles.modalForm}>
                            <Form.Control className={Styles.inputForm} type="text" placeholder="Your Name *" autoFocus/>
                            <Form.Control className={Styles.inputForm} type="email" placeholder="name@example.com" />
                            <Form.Control className={Styles.inputForm} type="tel" placeholder="Your Phone Number *" />
                            <Form.Control className={Styles.inputForm} as="textarea" rows={3} placeholder="Your Subject" />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className={Styles.btnModal} variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                        <Button className={Styles.btnModal} variant="primary" onClick={() => setShowModal(false)}>Submit Now</Button>
                    </Modal.Footer>
                </Modal>

                {/* ----------------------------- Navbar----------------------------- */}

                <Navbar expand="sm" className={Styles.navbar}>
                    <Navbar.Brand className={Styles.logo}>
                        <Link to="/main"><img src={Logo} alt="ImgLogo"/></Link>
                    </Navbar.Brand>

                    <section className={Styles.navMenu}>
                        <section className={Styles.navLeftHeader}>
                            <ul className={Styles.navLeftMenuHeader}>
                                <li className={Styles.navItem}><Link to="/">Home</Link></li>
                                <li className={Styles.navItem}><Link to="/about">About</Link></li>
                                <li className={Styles.navItem}><Link>Services<img src={CaretDown} alt="caretDown icon" className={Styles.caretDownIcon}/></Link>
                                    <ul className={Styles.subMenu}>
                                        <li className={Styles.subItem}><Link to="/services/service-01">Service 01</Link></li>
                                        <li className={Styles.subItem}><Link to="/services/service-02">Service 02</Link></li>
                                        <li className={Styles.subItem}><Link to="/services/service-03">Service 03</Link></li>
                                    </ul>
                                </li>
                                <li className={Styles.navItem}><Link to="/project">Works</Link></li>
                                <li className={Styles.navItem}><Link to="/products">Shop</Link></li>
                                <li className={Styles.navItem}><Link to="/contact">Contact</Link></li>
                            </ul>
                        </section>

                        <section >
                            <ul className={Styles.navRight}>
                                <li><Link to='/products'><img src={Shop} alt="ImgIcons"/></Link></li>
                            </ul>
                        </section>

                        <a aria-controls="navbar-nav-Header"
                           className={Styles.hamburgerMenu}
                           onClick={() => setShowCollapse(true)}>
                            <img src={HamburgerMenu} alt="ImgHamburger"/>
                        </a>

                    </section>
                </Navbar>

                <Modal id="navbar-nav-Header" className={Styles.navCollapse}
                       show={showCollapse}
                       onHide={() => setShowCollapse(false)}
                       aria-labelledby="Collapse-Box-Header" >
                    <Modal.Header className={Styles.CollapseHeader}>
                        <img src={Logo} alt="ImgLogo"/>
                    </Modal.Header>
                    <ul className={Styles.CollapseBox} id="Collapse-Box-Header">
                        <li className={Styles.navItem}><Link to="/">Home</Link></li>
                        <li className={Styles.navItem}><Link to="/about">About</Link></li>
                        <li className={Styles.navItem}><Link>Services<img src={CaretDown} alt="caretDown icon" className={Styles.caretDownIcon}/></Link>
                            <ul className={Styles.subMenu}>
                                <li className={Styles.subItem}><Link to="/services/service-01">Service 01</Link></li>
                                <li className={Styles.subItem}><Link to="/services/service-02">Service 02</Link></li>
                                <li className={Styles.subItem}><Link to="/services/service-03">Service 03</Link></li>
                            </ul>
                        </li>
                        <li className={Styles.navItem}><Link to="/project">Works</Link></li>
                        <li className={Styles.navItem}><Link to="/products">Shop</Link></li>
                        <li className={Styles.navItem}><Link to="/contact">Contact</Link></li>
                    </ul>
                </Modal>

                {/* <!---------------------  Main Header ------------------> */}
                <Row className={Styles.headerMain}>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.headerMainTop}>
                        <p><span>ENGINEERING</span> YOUR DREAMS WITH US</p>
                        <p>CONSTRUCTION & BUILDING</p>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} className={Styles.headerMainButton}>
                        <Link to="/about" className={Styles.ourStory}>Our Story</Link>
                        <Link to="/contact" className={Styles.contact}>Contact Us</Link>
                    </Col>
                </Row>
            </Container>
    );
};

export default Header;