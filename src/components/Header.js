import React from 'react';
import { Link } from "react-router-dom";

//CSS
import Styles from "../css/Header.module.css";

//Imags
import  Logo from "../image/logo/logo-khadamat.png";
import Slider1 from "../image/background-Image/home-slide-1.jpg";

//Icons
import FindUs from "../assets/icons/map.svg";
import Email from "../assets/icons/email.svg";
import Call from "../assets/icons/ui-call.svg";
import Search from "../assets/icons/search.svg";
import Shop from "../assets/icons/shop.svg";


const Header = () => {
    return (
        <div>
            <header>
                <section className={Styles.header}>


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

                    <section className={Styles.getQuote}>
                        <a href="#">Get A Quote</a>
                    </section>
                </section>

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
                                <li><a href="#">Works</a></li>
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
            </header>


        </div>
    );
};

export default Header;