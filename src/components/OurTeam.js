import React , { useState , useEffect , useReducer } from 'react';
import Slider from "react-slick";

//Component
import User from "./User";

//CSS
import Styles from "../css/OurTeam.module.css";

//Icons
import prevIcon from "../assets/icons/thin-left.svg";
import nextIcon from "../assets/icons/thin-right.svg";

//Object
import { Users } from "./share/userInformation";



const OurTeam = () => {

    const [state , setState] = useState([]);

    useEffect( () => {
        setState(Users);
    } , []);


    // let imgIndex = 0
    // const prevHandler = () => {
    //     imgIndex--
    //     if (imgIndex < 0) {
    //         imgIndex = Users.length - 1
    //     }
    //     setState(Users);
    // }
    //
    // const nextHandler = () => {
    //     imgIndex++
    //     if (imgIndex > Users.length) {
    //         imgIndex = 0 ;
    //     }
    //     setState(Users);
    // }



    return (
        <div>
            <section className={Styles.container}>

                <section className={Styles.top}>
                    <section className={Styles.left}>
                        <h4>FROM OUR CLIENT</h4>
                        <p>Testimonials</p>
                    </section>
                    {/*<section className={Styles.right}>*/}
                    {/*    <a >*/}
                    {/*        <img src={prevIcon} alt="prev"/>*/}
                    {/*        <span>PREV</span>*/}
                    {/*    </a>*/}
                    {/*    <a >*/}
                    {/*        <span>NEXT</span>*/}
                    {/*        <img src={nextIcon} alt="next"/>*/}
                    {/*    </a>*/}

                    {/*</section>*/}
                </section>

                <section className={Styles.bottom}>
                        {state.map(user => <User key={user.id} userData={user} />)}
                </section>

            </section>
        </div>
    );
};

export default OurTeam;