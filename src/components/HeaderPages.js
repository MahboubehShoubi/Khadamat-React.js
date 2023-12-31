import React , { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

//CSS
import Styles from "../css/HeaderPages.module.css";

//Imags
import Logo from "../assets/images/logo/khadamat-logo.png";
import Logo2 from "../assets/images/logo/logo-khadamat.png";
import HamburgerMenu from "../assets/icons/navigation-menu.svg";


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
import modalImg from "../assets/images/Images/carpentar-man.png";
import CaretDown from "../assets/icons/caret-down.svg";

const HeaderPages = (props) => {
    const {part1 , part2 , part3} = props;

    const [showModal, setShowModal] = useState(false);
    const [showCollapse, setShowCollapse] = useState(false);

    return (
        <Container fluid className={Styles.headerPageContainer}>
            <Row className={Styles.headerTop}>
                <Col md={2} lg={2} className={Styles.logo}>
                    <Link to="/"><img src={Logo} /></Link>
                </Col>

                <Col xs={12} sm={12} md={8} lg={8}>
                    <Row className={Styles.communication}>

                        <Col className={Styles.item1}>
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

                        <Col className={Styles.item2}>
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

                        <Col className={Styles.item3}>
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

                <Col xs={12} sm={12} md={2} lg={2} className={Styles.getQuote} onClick={() => setShowModal(true)}>
                    <a href="#">Get A Quote</a>
                </Col>
            </Row>

            <Modal className={Styles.modalBoxHeaderPages} show={showModal} onHide={() => setShowModal(false)} aria-labelledby="modal-Box">
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

            <Navbar expand="md" className={Styles.navbar}>
                <Navbar.Brand  className={Styles.logo2}>
                    <Link to='/'><img src={Logo2}/></Link>
                </Navbar.Brand>
                <a aria-controls="navbar-nav-headerPage" className={Styles.hamburgerMenu} onClick={() => setShowCollapse(true)}>
                    <img src={HamburgerMenu} />
                </a>
                <section className={Styles.navMenu}>
                    <section className={Styles.navLeft}>
                        <ul className={Styles.navLeftMenu}>
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


                    <section className={Styles.navRight}>
                        <ul>
                            <li><a href="#"><img src={FaceBook} /></a></li>
                            <li><a href="#"><img src={twitter} /></a></li>
                            <li><a href="#"><img src={GooglePlus} /></a></li>
                            <li><a href="#"><img src={Youtube} /></a></li>
                            <li><a href="#"><img src={Search} /></a></li>
                        </ul>
                    </section>
                </section>
            </Navbar>

            <Modal id="navbar-nav-headerPage" className={Styles.navCollapse}
                   show={showCollapse}
                   onHide={() => setShowCollapse(false)}
                   aria-labelledby="Collapse-Box-HeaderPage">
                <Modal.Header className={Styles.CollapseHeader}>
                    <img src={Logo2}/>
                </Modal.Header>

                <section className={Styles.CollapseBox} id="Collapse-Box-HeaderPage">
                    <ul className={Styles.CollapseBoxLeft}>
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

                    <ul className={Styles.CollapseBoxRight}>
                        <li><a href="#"><img src={FaceBook} /></a></li>
                        <li><a href="#"><img src={twitter} /></a></li>
                        <li><a href="#"><img src={GooglePlus} /></a></li>
                        <li><a href="#"><img src={Youtube} /></a></li>
                        <li><a href="#"><img src={Search} /></a></li>
                    </ul>
                </section>
            </Modal>

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

        </Container>
    );
};

export default HeaderPages;