import React from 'react';

//CSS
import Styles from "../css/QuestionSection.module.css";

//Image
import backgroundImage from "../image/Images/consultants.png";

const QuestionSection = () => {
    return (
        <div>

            <section className={Styles.container}>
                <section className={Styles.topSection}>
                    <h4>WE ALWAYS HELP YOU</h4>
                    <p>Requesst a Quote</p>
                </section>
                <section className={Styles.bottomSection}>
                    <section className={Styles.bottomLeft}>
                        <img src={backgroundImage} alt="contact"/>
                    </section>
                    <section className={Styles.bottomRightForm}>
                        <form>
                            <input type="text" placeholder="Your Name *"/>
                            <select>
                                <option>I would like to discuss</option>
                            </select>
                            <input type="email" placeholder="Your Email"/>
                            <input type="tel" placeholder="Your Phone Number *"/>
                            <button className={Styles.submitBtn} type="submit">submit Now</button>
                        </form>

                    </section>
                </section>
            </section>
            
        </div>
    );
};

export default QuestionSection;