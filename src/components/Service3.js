import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Component
import HeaderPages from "./HeaderPages";
import Footer from "./Footer";
import QuestionSection from "./QuestionSection";
import OurTeam from "./OurTeam";

//CSS
import Styles from "../css/Service3.module.css";

//image
import service3_1 from '../assets/images/services/service-03/img/services-1.png';
import service3_2 from '../assets/images/services/service-03/img/services-2.png';
import service3_3 from '../assets/images/services/service-03/img/services-3.png';
import service3_4 from '../assets/images/services/service-03/img/services-4.png';
import service3_5 from '../assets/images/services/service-03/img/services-5.png';
import service3_6 from '../assets/images/services/service-03/img/services-1.png';


const Service3 = () => {
    return (
        <>
{/*----------------------------- Header ----------------------------*/}
            <HeaderPages part1="OUR" part2="SERVICES" part3="SERVICES" />

{/*---------------------------- Container -------------------------*/}
          <Container fluid className={Styles.container}>
              <Row xs={1} sm={1} md={3} lg={3} className={Styles.service3Container}>

                  <Col className={Styles.service3Card}>
                      <img src={service3_1}/>
                      <div>
                          <h5>Electrical Services</h5>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et
                              . Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                          </p>
                      </div>
                  </Col>

                  <Col className={Styles.service3Card}>
                      <img src={service3_2}/>
                      <div>
                          <h5>Electrical Services</h5>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et
                              . Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                          </p>
                      </div>
                  </Col>

                  <Col className={Styles.service3Card}>
                      <img src={service3_3}/>
                      <div>
                          <h5>Electrical Services</h5>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et
                              . Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                          </p>
                      </div>
                  </Col>

                  <Col className={Styles.service3Card}>
                      <img src={service3_4}/>
                      <div>
                          <h5>Electrical Services</h5>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et
                              . Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                          </p>
                      </div>
                  </Col>

                  <Col className={Styles.service3Card}>
                      <img src={service3_5}/>
                      <div>
                          <h5>Electrical Services</h5>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et
                              . Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                          </p>
                      </div>
                  </Col>

                  <Col className={Styles.service3Card}>
                      <img src={service3_6}/>
                      <div>
                          <h5>Electrical Services</h5>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et
                              . Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.
                          </p>
                      </div>
                  </Col>




              </Row>


          </Container>



{/*------------------------------ QuestionSection Component -----------------------   */}
          <QuestionSection />

{/*------------------------------ OurTeam Component -----------------------   */}
          <OurTeam />

{/*------------------------------ Footer -----------------------   */}
          <Footer />
            
        </>
    );
};

export default Service3;