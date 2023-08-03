import React from 'react';

//Components
import Header from "./Header";
import SuccessWorks from "./SuccessWorks";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import QuestionSection from "./QuestionSection";
import Footer from "./Footer";





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