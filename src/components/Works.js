import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//Component
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";

//CSS
import Styles from '../css/Works.module.css';

//Images
import apartment from '../image/works/apartment.png';
import building from '../image/works/building.png';
import building2 from '../image/works/building-2.png';
import casques from '../image/works/casques.png';
import constructionTruck from '../image/works/construction-truck.png';
import houseClock from '../image/works/house-clock.png';
import modernHome from '../image/works/modern-home.png';
import modernHouse from '../image/works/modern-house.png';
import scaniaTruck from '../image/works/scania-truck.png';
import volvoTruck02 from '../image/works/volvo-truck-02.png';
import {Stack} from "react-bootstrap";



const Works = () => {
    return (
        <div>
            <HeaderPages part1="OUR"  part2="PROJECTS"  part3="PROJECTS" />

            <div className={Styles.worksContainer}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg='8'>
                            <Tabs
                                defaultActiveKey="allProjects"
                                id="fill-tab"
                                className={Styles.listTab}
                                justify
                            >
                                <Tab eventKey="allProjects" title="All Projects" >
                                    <div className={Styles.worksBoxImage}>
                                        <Row className='d-flex justify-content-between row-gap-4 mb-4 '>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={building} className='w-100'/>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={casques}/>
                                                    <img src={volvoTruck02}/>
                                                </Stack>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={houseClock}/>
                                                    <img src={scaniaTruck}/>
                                                </Stack>
                                            </Col>
                                        </Row>
                                        <Row className='d-flex justify-content-between row-gap-4'>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={building2}/>
                                                    <img src={constructionTruck}/>
                                                </Stack>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={modernHouse}/>
                                                    <img src={apartment}/>
                                                </Stack>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={modernHome} className='w-100'/>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                                <Tab eventKey="architecture" title="Architecture">
                                    <div className={Styles.worksBoxImage}>
                                        <Row className='d-flex justify-content-between row-gap-4 mb-4'>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={building} className='w-100'/>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={building2} className='w-100 animate__animated animate__zoomIn'/>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={apartment} className='w-100 animate__animated animate__zoomIn'/>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="design" title="Design">
                                    <div className={Styles.worksBoxImage}>
                                        <Row className='d-flex justify-content-between row-gap-4 mb-4'>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={building} className='w-100'/>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={houseClock} className='w-100 animate__animated animate__zoomIn'/>
                                                    <img src={constructionTruck} className='w-100 animate__animated animate__fadeInRight'/>
                                                </Stack>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={volvoTruck02} className='w-100 animate__animated animate__fadeInUp'/>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                                <Tab eventKey="interior" title="Interior">
                                    <div className={Styles.worksBoxImage}>
                                        <Row className='d-flex justify-content-between row-gap-4 mb-4'>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={casques} className='w-100 animate__animated animate__fadeInBottomRight'/>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={houseClock} className='w-100'/>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <img src={volvoTruck02} className='w-100 animate__animated animate__fadeInBottomLeft'/>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                                <Tab eventKey="renovation" title="Renovation">
                                    <div className={Styles.worksBoxImage}>
                                        <Row className='d-flex justify-content-between row-gap-4 mb-4'>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={casques} className='w-100 animate__animated animate__zoomIn'/>
                                                    <img src={modernHouse} className='w-100 animate__animated animate__fadeInLeft'/>
                                                </Stack>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={volvoTruck02} className='w-100 animate__animated animate__zoomIn'/>
                                                    <img src={constructionTruck} className='w-100 animate__animated animate__fadeInUp'/>
                                                </Stack>
                                            </Col>
                                            <Col xs={12} md={4} lg={4}>
                                                <Stack gap={4}>
                                                    <img src={scaniaTruck} className='w-100 animate__animated animate__zoomIn'/>
                                                    <img src={apartment} className='w-100 animate__animated animate__fadeInRight'/>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default Works;