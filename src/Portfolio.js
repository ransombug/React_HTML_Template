import React from 'react';

import PortFolioOne from './PortFolio-One';
import PortFolioTwo from './PortFolio-Two';
import PortFolioThree from './PortFolio-Three';
import PortFolioFour from './PortFolio-Four';
import PortFolioFive from './PortFolio-Five';
import PortFoliosix from  './PortFolio-Six';

const Portfolio = () =>
{
    return(
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
               
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div claclassNamess="divider-custom-line"></div>
                </div>
                 {/* Portfolio Grid Items */}
                <div className="row">
                    
                    <PortFolioOne></PortFolioOne>
                    <PortFolioTwo></PortFolioTwo>
                    <PortFolioThree></PortFolioThree>
                    <PortFolioFour></PortFolioFour>
                    <PortFolioFive></PortFolioFive>
                    <PortFoliosix></PortFoliosix>                                  
                </div>
            </div>
        </section>
    );
}

export default Portfolio;