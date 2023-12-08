import Banner from "./Banner";
import Cta from "./CTA";
import How from "./How";
import OurServices from "./OurServices";
import Sale from "./Sale";

import Testimonial from "./Testimonial";

const Home = () => {
    return (
        //Homepage of the website
        <div>
            <Banner></Banner>
            <How></How>
            <OurServices></OurServices>
            <Sale></Sale>
            <Testimonial></Testimonial>
            <Cta></Cta>
        </div>
    );
};

export default Home;
