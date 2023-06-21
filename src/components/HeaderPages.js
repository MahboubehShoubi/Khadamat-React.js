import React from 'react';
import { Link } from "react-router-dom";

//CSS
import Styles from "../css/HeaderPages.module.css";

//Imags
import  Logo from "../image/logo/khadamat-logo.png";

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
                <section className={Styles.header}>

                    <section className={Styles.logo}>
                        <a href="../../index.html">
                            <img src={Logo} /></a>
                    </section>

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
                                <li><a href="#"><img src={FaceBook} /></a></li>
                                <li><a href="#"><img src={twitter} /></a></li>
                                <li><a href="#"><img src={GooglePlus} /></a></li>
                                <li><a href="#"><img src={Youtube} /></a></li>
                                <li><a href="#"><img src={Search} /></a></li>
                            </ul>
                        </section>

                    </section>
                </nav>

                {/* <!---------------------  Main Header ------------------> */}

                <section className={Styles.headerMain}>
                    <section className={Styles.headerLeft}>
                        <span> {part1} </span>
                        <span> {part2} </span>
                    </section>
                    <section className={Styles.headerRight}>
                        <img src={Home} alt="HomeIcon"/>
                        <Link to="/main">Home</Link>
                        <span> / </span>
                        <a href="#" className={Styles.rightLink}> {part3} </a>
                    </section>

                </section>
            </header>

        </div>
    );
};

export default HeaderPages;