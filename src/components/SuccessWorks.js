import React , { useEffect , useState } from 'react';

//CSS
import Styles from '../css/SuccessWorks.module.css';

//Functions
// import { counter } from "../functions/helpers";


//Images
import ImgBottom from '../image/Images/build-img-one.jpg';
import ImgTop from '../image/Images/build-img-two.jpg';
import ImgRight from '../image/Images/since-knock-up.png';




const SuccessWorks = () => {

    // const counter = () => {

    // }

    // const [counter,setCounter]=useState();

    useEffect(() => {


    } , [])



    return (
        <div>
            <section className={Styles.container}>

                <section className={Styles.boxLeft}>
                    <section className={Styles.imgBottom} >
                        <img src={ImgBottom}/>
                    </section>
                    <section className={Styles.imgTop} >
                        <img src={ImgTop}/>
                    </section>
                </section>

                <section className={Styles.boxRight}>
                    <section className={Styles.boxLeftTop}>
                        <img src={ImgRight}/>
                    </section>
                    <p>
                        Apparently we had reached a great height in the atmosphere,
                        for the sky was a dead black, and the stars had ceased to twinkle.
                        By the same illusion which lifts the horizon of the sea to the
                        level of the spectator on a hillside.
                    </p>
                    <section className={Styles.counters}>
                        <section className={Styles.counter}>
                            <span className={Styles.project} name="project">200</span>
                            <span>PROJECTS</span>
                        </section>

                        <section className={Styles.counter} >
                            <span className={Styles.employers} name='employers'>875</span>
                            <span>EMPLOYERS</span>
                        </section>

                        <section className={Styles.counter}>
                            <span className={Styles.customers} name='customers'>1231</span>
                            <span>CUSTOMERS</span>
                        </section>

                        <section className={Styles.counter}>
                            <span className={Styles.awards} name="awards">26</span>
                            <span>AWARDS</span>
                        </section>

                    </section>

                </section>

            </section>
            
        </div>
    );
};

export default SuccessWorks;