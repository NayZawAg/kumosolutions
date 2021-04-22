import React from "react";

var Services = () => {
    return(
        <div className="container-fluid" style={{marginBottom: 110}}>
        <div style={{paddingTop:50}}>
            <img src="./images/azure.png" className="azureImg float-left" />        
            <h4 className="companyDescTitle">Data Analytics Services</h4>
            <hr className="underLineAzure" />
            <div className="text-info text-justify">
                <p>Our data analytic services analyse and transforms businesses' raw data into actionable and insightful information which aids the user in making quick and accurate data-driven decisions. Data Analytics helps in delivering faster and more detailed data reports backed by precise and insightful analysis, enhancing customer experiences. We have collaborated with experts in related areas to bring out the best outcomes for analysing data.</p>
            </div>
            
            <img src="./images/AI.jpg" className="aiImg float-right" />
            <h4 className="companyDescTitle text-right">Data Warehousing</h4>
            <hr className="underLineAI" />
            <div className="text-info text-justify">
                <p>We provide the service for data warehousing by designing a data storage system by querying data from different sources such as Rest API, Databases, Excel and CSV. Then, analyse data to transform those into actionable insight. Then, save in the system and distribute those back to related customers for services.</p>
            </div> 

            <img src="./images/mobileapps.jpg" className="azureImg float-left" />        
            <h4 className="companyDescTitle">Mobile Development</h4>
            <hr className="underLineMobileApps" />
            <div className="text-info text-justify">
                <p>We provide full-cycle mobile app development services, including professional business analysis, design, and development of your mobile application from a single idea to complete application launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand. Using a proactive approach and an agile process, we ensure your time and investment are optimized at every step of development and you receive a digital product that fully meets your requirements and exceeds your expectations.</p>
            </div>

            <img src="./images/webapp.jpg" className="aiImg float-right" />
            <h4 className="companyDescTitle text-right">Web Development</h4>
            <hr className="underLineAI" />
            <div className="text-info text-justify">
                <p>Kumo Solutions' web development services include the designing, building, integration, scaling, and maintanace of our dynamic software solutions. Our products deliver highly functional, and visually engaging web products, including both platform-based and custom web solutions for enterprises. In an increasingly competitive online market, the appearance, usability and accessibility of your website is more important than ever.</p>
            </div> 

            <img src="./images/uiux.png" className="azureImg float-left" />        
            <h4 className="companyDescTitle">UI/UX Design</h4>
            <hr className="underLineMobileApps" />
            <div className="text-info text-justify">
                <p>We provide UI/UX design services to create user-friendly interfaces that enable users to understand how to use complex technical products. Our Ux design enhances the users' experience by integrating with our integrated UI (user interface) that emphasizes a clear and concise look and layout. Kumo Solutions' UI/UX design services empower businesses, enabling the creation of a clear vision of their products that is easily communicable to their customers.</p>
            </div>
        </div>
        </div>
    );
}

export default Services;