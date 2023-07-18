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
import  Logo from "../image/logo/logo-khadamat.png";
import Slider1 from "../image/background-Image/home-slide-1.jpg";
import modalImg from "../image/Images/carpentar-man.png";

//Icons
import FindUs from "../assets/icons/map.svg";
import Email from "../assets/icons/email.svg";
import Call from "../assets/icons/ui-call.svg";
import Search from "../assets/icons/search.svg";
import Shop from "../assets/icons/shop.svg";
import CaretDown from "../assets/icons/caret-down.svg";


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Container fluid className={Styles.headerContainer}>
            <Row className={Styles.headerTop}>
                <Col xs={12} sm={12} md={9} lg={9}>
                    <Row className={Styles.communication}>
                        <Col xs={6} sm={6} md={4} lg={4} className={Styles.communicationItems}>
                            <section className={Styles.item1}>
                                <section className={Styles.itemLeftIcon}>
                                    <img src={FindUs} className={Styles.icofontMap} />
                                </section>
                                <section className={Styles.itemRightText}>
                                    <span>Find Us</span>
                                    <span>325 admirat unit, North cost, USA</span>
                                </section>
                            </section>
                        </Col>

                        <Col xs={6} sm={6} md={4} lg={4} className={Styles.communicationItems}>
                            <section className={Styles.item2}>
                                <section className={Styles.itemLeftIcon}>
                                    <img src={Email} className={Styles.icofontEmail} />
                                </section>
                                <section className={Styles.itemRightText}>
                                    <span>Email</span>
                                    <span>admin@bbbbbbbb.com</span>
                                </section>
                            </section>
                        </Col>

                        <Col md={4} lg={4} className={Styles.communicationItems}>
                            <section className={Styles.item3}>
                                <section className={Styles.itemLeftIcon}>
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

                <Col xs={5} sm={5} md={3} lg={3} className={Styles.getQuote} onClick={handleShow}>
                    <a href="#">Get A Quote</a>
                </Col>
            </Row>

            <Modal className={Styles.modalBox} show={show} onHide={handleClose}>
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
                    <Button className={Styles.btnModal} variant="secondary" onClick={handleClose}>Close</Button>
                    <Button className={Styles.btnModal} variant="primary" onClick={handleClose}>Submit Now</Button>
                </Modal.Footer>
            </Modal>

            {/* ----------------------------- Navbar----------------------------- */}

            <Navbar expand="sm" className={Styles.navbar}>
                <Col xs={4} sm={4} md={3} lg={3} className={Styles.logo}>
                    <Link to="/main"><img src={Logo} /></Link>
                </Col>
                <Col xs={{ span: 3, offset: 5 }} sm={{ span: 3, offset: 5 }} md={{ span:9, offset: 0}} lg={{ span:9, offset: 0 }} className={Styles.navCollapseBox}>
                    <Navbar.Toggle aria-controls="navbar-nav" className={Styles.hamburgerMenu}/>
                    <Navbar.Collapse id="navbar-nav" className={Styles.navCollapse}>
                        <ul className={Styles.navLeft}>
                            <li className={Styles.navItem}><Link to="/">Home</Link></li>
                            <li className={Styles.navItem}><Link to="/about">About</Link></li>
                            <li className={Styles.navItem}><Link>Services<img src={CaretDown} alt="caretDown icon" className={Styles.caretDownIcon}/></Link>
                                <ul className={Styles.subMenu}>
                                    <li className={Styles.subItem}><Link to="/services/service-01">Service 01</Link></li>
                                    <li className={Styles.subItem}><Link>Service 02</Link></li>
                                    <li className={Styles.subItem}><Link>Service 03</Link></li>
                                    <li className={Styles.subItem}><Link>Single Service</Link></li>
                                </ul>
                            </li>
                            <li className={Styles.navItem}><Link to="/project">Works</Link></li>
                            <li className={Styles.navItem}><Link to="/products">Shop</Link></li>
                            <li className={Styles.navItem}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Navbar.Collapse>
                    <section >
                        <ul className={Styles.navRight}>
                            <li><a href="#"><img src={Shop} /></a></li>
                            <li><a href="#"><img src={Search}/></a></li>
                        </ul>
                    </section>
                </Col>
            </Navbar>

            {/* <!---------------------  Main Header ------------------> */}
            <Row className={Styles.headerMain}>
                <img src={Slider1} alt="slider"/>
                <Col xs={12} sm={12} md={8} lg={8} className={Styles.headerMainTop}>
                    <p><span>ENGINEERING</span> YOUR DREAMS WITH US</p>
                    <p>CONSTRUCTION & BUILDING</p>
                </Col>

                <Col xs={6} sm={6} md={4} lg={4} className={Styles.headerMainButton}>
                    <Link to="/about" className={Styles.ourStory}>Our Story</Link>
                    <Link to="/contact" className={Styles.contact}>Contact Us</Link>
                </Col>
            </Row>

        </Container>
    );
};

export default Header;