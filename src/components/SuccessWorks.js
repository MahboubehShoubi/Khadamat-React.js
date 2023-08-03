import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from 'react-countup';

//Component
// import CounterUp from "./share/CounterUp";


//CSS
import Styles from '../css/SuccessWorks.module.css';

//Images
import ImgBottom from '../assets/images/Images/build-img-one.jpg';
import ImgTop from '../assets/images/Images/build-img-two.jpg';
import ImgRight from '../assets/images/Images/since-knock-up.png';




const SuccessWorks = () => {




    return (
        <div>
            <Container fluid>

                <Row className={Styles.container}>

                    <Col xs={12} sm={12} md={5} lg={5} className={Styles.boxLeft}>
                        <section className={Styles.imgBottom} >
                            <img src={ImgBottom}/>
                        </section>
                        <section className={Styles.imgTop} >
                            <img src={ImgTop}/>
                        </section>
                    </Col>

                    <Col xs={12} sm={12} md={7} lg={7} className={Styles.boxRight}>
                        <section className={Styles.boxLeftTop}>
                            <img src={ImgRight}/>
                        </section>
                        <p>
                            Apparently we had reached a great height in the atmosphere,
                            for the sky was a dead black, and the stars had ceased to twinkle.
                            By the same illusion which lifts the horizon of the sea to the
                            level of the spectator on a hillside.
                        </p>
                        <Row className={Styles.counters}>
                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counter}>
                                <span className={Styles.project} name="project">
                                    {/*<CounterUp end={200} time={10}/>*/}
                                    <CountUp end={200} duration={5} />
                                </span>
                                <span>PROJECTS</span>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counter} >
                                <span className={Styles.employers} name='employers'>
                                    {/*<CounterUp end={875} time={10}/>*/}
                                    <CountUp end={875} duration={5}/>
                                </span>
                                <span>EMPLOYERS</span>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counter}>
                                <span className={Styles.customers} name='customers'>
                                    {/*<CounterUp end={1231} time={10} />*/}
                                    <CountUp end={1231} duration={5}/>
                                </span>
                                <span>CUSTOMERS</span>
                            </Col>

                            <Col xs={6} sm={6} md={3} lg={3} className={Styles.counter}>
                                <span className={Styles.awards} name="awards">
                                    {/*<CounterUp end={26} time={50} />*/}
                                    <CountUp end={26} duration={7}/>
                                </span>
                                <span>AWARDS</span>
                            </Col>

                        </Row>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default SuccessWorks;