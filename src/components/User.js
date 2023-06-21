import React from 'react';

//CSS
import Styles from "../css/User.module.css";

const User = ({userData}) => {
    const { image , description , name } = userData;
    return (
        <div>
            <section className={Styles.container}>
                <img className={Styles.userImage} src={image} alt="userImage"/>
                <p>{description}</p>
                <span>{name}</span>
            </section>
        </div>
    );
};

export default User;