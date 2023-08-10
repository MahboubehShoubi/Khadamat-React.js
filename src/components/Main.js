import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Components
import Header from "./Header";
import SuccessWorks from "./SuccessWorks";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import QuestionSection from "./QuestionSection";
import Footer from "./Footer";

//CSS
import Styles from "../css/Main.module.css";


const Main = () => {
    return (
        <>
            <Header />
            <SuccessWorks />
            <OurServices />
            <OurTeam />
            <QuestionSection />
            <Footer />
        </>

    );
};

export default Main;