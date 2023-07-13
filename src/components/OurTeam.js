import React , { useState , useEffect , useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination , Autoplay ,Navigation } from 'swiper/swiper.esm.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//CSS
import Styles from "../css/OurTeam.module.css";
import 'swiper/swiper.min.css';
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';



//Object
import { Users } from "./share/userInformation";



const OurTeam = () => {

    const [state , setState] = useState([]);

    useEffect( () => {
        setState(Users);
    } , []);



    return (
        <div>
            <Container fluid>
                <section className={Styles.container}>

                    <Row className={Styles.top}>
                        <Col className={Styles.left}>
                            <h4>FROM OUR CLIENT</h4>
                            <p>Testimonials</p>
                        </Col>
                    </Row>

                    <Swiper
                        spaceBetween={80}
                        slidesPerView={1}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
                        className={Styles.mySwiper}
                    >

                        {state.map(user => <SwiperSlide  key={user.id} className={Styles.userContainer}>
                            <img className={Styles.userImage} src={user.image} alt="userImage"/>
                            <p className={Styles.userDescription}>{user.description}</p>
                            <span className={Styles.userName}>{user.name}</span>
                        </SwiperSlide>)}
                    </Swiper>

                </section>
            </Container>
        </div>
    );
};





export default OurTeam;