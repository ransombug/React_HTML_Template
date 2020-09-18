import React from 'react';

import AboutOne from './About-One';
import AboutTwo from './About-Two'

const About = () =>
{
    return(
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <AboutOne></AboutOne>             {/* <!-- About Section Content--> */}
               
                    <AboutTwo></AboutTwo>             {/* <!-- About Section Button--> */}
                
            </div>
        </section>
    );
}

export default About;