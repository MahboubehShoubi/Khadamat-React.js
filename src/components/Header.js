import React , { useState } from 'react';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
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


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Container>
                <Row className={Styles.header}>

                    <section className={Styles.communication}>

                        <section className={Styles.communicationItems}>
                            <section className={Styles.item1}>
                                <section className={Styles.itemLeftIcon}>
                                    <img src={FindUs} className={Styles.icofontMap} />
                                </section>
                                <section className={Styles.itemRightText}>
                                    <span>Find Us</span>
                                    <span>325 admirat unit, North cost, USA</span>
                                </section>
                            </section>
                        </section>

                        <section className={Styles.communicationItems}>
                            <section className={Styles.item2}>
                                <section className={Styles.itemLeftIcon}>
                                    <img src={Email} className={Styles.icofontEmail} />
                                </section>
                                <section className={Styles.itemRightText}>
                                    <span>Email</span>
                                    <span>admin@bbbbbbbb.com</span>
                                </section>
                            </section>    
                        </section>

                        <section className={Styles.communicationItems}>
                            <section className={Styles.item3}>
                                <section className={Styles.itemLeftIcon}>
                                    <img src={Call} className={Styles.icofontUiCall} />
                                </section>
                                <section className={Styles.itemRightText}>
                                    <span>call us now</span>
                                    <span>0123456789</span>
                                </section>
                            </section>    
                        </section>

                    </section>

                    <section className={Styles.getQuote} onClick={handleShow}>
                        <a href="#">Get A Quote</a>
                    </section>
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
                        <Form>
                            <Form.Control type="text" placeholder="Your Name *" autoFocus/>
                            <Form.Control type="email" placeholder="name@example.com" />
                            <Form.Control type="tel" placeholder="Your Phone Number *" />
                            <Form.Control as="textarea" rows={3} placeholder="Your Subject" />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Submit Now</Button>
                    </Modal.Footer>
                </Modal>

    {/* ----------------------------- Navbar----------------------------- */}

                <nav>
                    <section className={Styles.navbar}>

                        <section className={Styles.logo}>
                            <Link to="/main">
                                <img src={Logo} /></Link>
                        </section>

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
                                <li><a href="#"><img src={Shop} /></a></li>
                                <li><a href="#"><img src={Search} /></a></li>
                            </ul>
                        </section>

                    </section>
                </nav>

        {/* <!---------------------  Main Header ------------------> */}

                <section className={Styles.headerMain}>
                    <img src={Slider1} alt="slider"/>
                    <section className={Styles.headerMainTop}>
                        <p><span>ENGINEERING</span> YOUR DREAMS WITH US</p>
                        <p>CONSTRUCTION & BUILDING</p>
                    </section>

                    <section className={Styles.headerMainButton}>
                        <Link to="/ourstory" className={Styles.ourStory}>Our Story</Link>
                        <Link to="/contact" className={Styles.contact}>Contact Us</Link>
                    </section>

                </section>
            </Container>


        </div>
    );
};

export default Header;