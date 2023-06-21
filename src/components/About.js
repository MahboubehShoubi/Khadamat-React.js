import React from 'react';

import HeaderPages from "./HeaderPages";
import SuccessWorks from "./SuccessWorks";
import OurTeam from "./OurTeam";
import Footer from "./Footer";

const About = () => {
    return (
        <div>

            <HeaderPages part1="ABOUT" part2="US" part3="ABOUT US" />
            <SuccessWorks />
            <OurTeam />
            <Footer />

        </div>
    );
};

export default About;