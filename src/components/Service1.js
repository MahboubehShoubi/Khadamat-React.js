import React , { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal';

//Component
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";
import Brand from "./Brand";

import Styles from "../css/Service1.module.css";

//Image
import construction from "../image/services/service-01/construction-photograph.png";
import constructionSite from "../image/services/service-01/construction-site-photo.png";
import shovel from "../image/services/service-01/shovel.png";
import volvoTruck from "../image/services/service-01/volvo-truck.png";
import womanEngineer02 from "../image/services/service-01/woman-engineer-2.png";
import workerUsingPowertool from "../image/services/service-01/worker-using-powertool.png";
import player from "../image/Images/play.png";


//Icons
import award from "../assets/icons/award.svg";
import chartHistogram from "../assets/icons/chart-histogram.svg";
import home from "../assets/icons/home2.svg";
import users from "../assets/icons/users.svg";



const Service1 = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <HeaderPages part1="OUR" part2="SERVICES" part3="SERVICES" />

            <Container fluid className={Styles.container}>
                    <Row className={Styles.topTextHeader}>
                        <h2>What We Offer</h2>
                        <span>OUR SERVICES</span>
                    </Row>
                    <Row className={Styles.galleryImagCenter}>
                        <Row xs={1} sm={1} md={3} lg={3} className={Styles.serviceBoxImg}>
                            <Col xs={12} sm={12} md={4} lg={4} className={Styles.servicesImg}>
                                <img src={construction} alt="imgService01" />
                                <p>Mechanical Engineering</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} className={Styles.servicesImg}>
                                <img src={womanEngineer02} alt="imgService01"/>
                                <p>Civil & Architecture</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} className={Styles.servicesImg}>
                                <img src={workerUsingPowertool} alt="imgService01"/>
                                <p>Electrical</p>
                            </Col>
                        </Row>

                        <Row className={Styles.serviceBoxImg}>
                            <Col xs={12} sm={12} md={4} lg={4} className={Styles.servicesImg}>
                                <img src={shovel} alt="imgService01"/>
                                <p>Material Engineering</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} className={Styles.servicesImg}>
                                <img src={constructionSite} alt="imgService01"/>
                                <p>Power & Energy</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} className={Styles.servicesImg}>
                                <img src={volvoTruck} alt="imgService01"/>
                                <p>Electronics</p>
                            </Col>
                        </Row>
                    </Row>

                {/*------------------- Box Center ---------------------*/}
                <Row className={Styles.boxCenter}>

                    <div className={Styles.bgBlack}>
                    </div>

                    <div className={Styles.bgCenter}>
                        <div className={Styles.bgCenterBox}>
                            <a onClick={handleShow}>
                                <img src={player} alt="playPNG"/>
                            </a>
                        </div>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <video controls autoplay className="w-100">
                                <source src="https://youtu.be/0uEWsPxap0k"/>
                            </video>
                        </Modal.Body>
                    </Modal>

                    <div className={Styles.bgorang}>
                        <Row className={Styles.bgorangText}>

                            <Col xs={6} sm={6} md={3} lg={3}  className={Styles.counterBox}>
                                <div >
                                    <img src={chartHistogram} alt="imgIcons" className={Styles.imgIcons}/>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className={Styles.serviceCounter}>990</span>
                                    <span className={Styles.serviceCounterText}>work completed</span>
                                </div>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counterBox}>
                                <div >
                                    <img src={users} alt="imgIcons" className={Styles.imgIcons}/>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className={Styles.serviceCounter}>199</span>
                                    <span className={Styles.serviceCounterText}>Employers</span>
                                </div>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counterBox}>
                                <div >
                                    <img src={award} alt="imgIcons" className={Styles.imgIcons}/>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className={Styles.serviceCounter}>22</span>
                                    <span className={Styles.serviceCounterText}>Awards winning</span>
                                </div>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counterBox}>
                                <div >
                                    <img src={home} alt="imgIcons" className={Styles.imgIcons}/>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className={Styles.serviceCounter}>20</span>
                                    <span className={Styles.serviceCounterText}>Years of experiences</span>
                                </div>
                            </Col>

                        </Row>
                    </div>

                </Row>


            </Container>

            <Brand />
            <Footer/>

        </>

    );
};

export default Service1;