import React from 'react';

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
            <footer>
                <section className={Styles.footer}>
                    <img className={Styles.backgroundImage} src={background} alt={background} />


                        {/*!------------------ TOP FOOTER ------------------------->*/}

                        <section className={Styles.footerTop}>


                            {/*---------- Item1 -----------------*/}
                            <section className={Styles.footerTopItem}>
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
                            </section>


                            {/*----------------- item2 --------------*/}
                            <section className={Styles.footerTopItem}>
                                <section className={Styles.footerItem2}>
                                    <h3 className={Styles.footerItemHeader}>Head Office<span>.</span></h3>
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


                            {/*----------------- item3 -----------------*/}
                            <section className={Styles.footerTopItem}>
                                <section className={Styles.footerItem3}>
                                    <h3 className={Styles.footerItemHeader}>Company Links<span>.</span></h3>
                                    <section>
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
                            </section>


                            {/*----------------- item4 -----------------------*/}
                            <section className={Styles.footerTopItem}>
                                <section className={Styles.footerItem4}>
                                    <h3 className={Styles.footerItemHeader}>Our Branches<span>.</span></h3>
                                    <section>
                                        <img src={MapLocation} />
                                    </section>
                                </section>

                            </section>

                        </section>


                        {/*----------------------------- BOTTOM FOOTER ----------------------*/}

                        <section className={Styles.footerBottom}>

                            <section className={Styles.footerBottomRight}>
                                <ul>
                                    <li><a href="../../index.html">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Project</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </section>

                            <section className={Styles.footerBottomLeft}>
                                <p>©2023 - Powered By <span>M.Shoubi</span></p>
                            </section>

                        </section>
                </section>
            </footer>

        </div>
    );
};

export default Footer;