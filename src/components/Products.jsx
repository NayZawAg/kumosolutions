import React from "react";

var Products = () => {
    return(
        <div className="container-fluid" style={{marginBottom: 150}}>
        <div style={{paddingTop:100}}>       
            <img src="./images/ipbem.jpeg" className="float-right aboutCompanyImg" />
            <h4 className="aboutCompanyTitle">Real time machine learning platform</h4>
            <hr className="underLine" />
            <div className="text-info text-justify">
                <div className="row">
                    <p className="col-12 pl-0"></p>
                </div>
                <p>Through partnerships with CapitalLand, we developed a real-time machine learning plaform capable of
                    performing real-time data analysis. This plaform combines intelligent, decision-making algorithms with
                    collected data, enabling developers to create a business solution instantaneously with the most current
                    data, In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform
                    provides users real-time alarm system of chillers by learning and training machines' behaviours through
                    machine learning algorithms.</p>
            </div>

            <img src="./images/acbel.jpeg" className="globalScaleImg float-left" />
            <h4 className="companyDescTitle text-right">Global Scale and Agility</h4>
            <hr className="underLineTaiwan" />
            <div className="text-info text-justify">
                <p>Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power
                    consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving
                    opportunity and validating measurable saving results by using data visualizations and data driven
                    approaches. It consists of MyApps and User Management system in which MyApps provides five main parts
                    for chiller system and User Management for authorizing user access to the system.</p>
                <p>The system provides chiller system's latest information with Map View, consuming side, report analysis
                    and control. For user management, admin can add or edit or delete users and their information and
                    control access limit for each user.</p>
            </div>

            <div className="mt-5">
                <img src="./images/crm.jpeg" className="float-right aboutCompanyImg" />
                <h4 className="aboutCompanyTitle">CRM Modules</h4>
                <hr className="underLine" />
                <div className="text-info text-justify">
                    <div className="row">
                        <p className="col-12 pl-0"></p>
                    </div>
                    <p>Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager.</p>
                    <p>Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.</p>
                </div>
            </div>

            <img src="./images/chiller1.jpeg" className="globalScaleImg float-left" />
            <h4 className="companyDescTitle text-right">Chiller Plant Analytics</h4>
            <hr className="underLineTaiwan" />
            <div className="text-info text-justify">
                <p>We have implemented Power generating and cooling system data analysis reporting to serveral chiller system clients: Acbel (Taiwan), PPHG (Singapore) and so on. Our Chiller Plant Analytics product includes real-time chiller monitoring system, daily reports on each chillers' performance, and mobile alert system. Through this system, clients can monitor chiller performance trends in real-time or by historical dates, power consumptions of each chiller component and temperature trends of each chiller produced while in operation.</p>
                <p>Moreover, clients can check daily reports through this plaform for chillers' overalll performance reviews by selecting any date they would like to review. The system contains user management system to control users's role and levels so that sites information are only accessed by authorized person. Admin can edit each user's access level from the UI.  </p>
            </div>

            <div className="mt-5">
                <img src="./images/solarporean.jpeg" className="float-right aboutCompanyImg" />
                <h4 className="aboutCompanyTitle">Solarporean</h4>
                <hr className="underLine" />
                <div className="text-info text-justify">
                    <div className="row">
                        <p className="col-12 pl-0"></p>
                    </div>
                    <p>This product is dedicated for a Singapore based Solar Power Company. The main function of this product is providing source information for Singapore's Energy Market bidding. In this single platform, various vendors are able to control their sites for power output monitoring and market bidding. As a registered vendor, the client is able to access real-time and historical prices and demand on the market. Users can also generate various reports such as quarterly revenue report, service report, activation reports and so on by selecting the time range they would like to.</p>

                    </div>
            </div>

            <img src="./images/survey.jpeg" className="globalScaleImg float-left" />
            <h4 className="companyDescTitle text-right">Survey Plaform</h4>
            <hr className="underLineTaiwan" />
            <div className="text-info text-justify">
                <p>This is the Singapore exploratory project in which the plaform to create, fill and submit surveys. By collecting information through survey system, the platform will transform those information into meaningful reports for application across industries.</p>
            </div>
        </div>
        </div>
    );
}

export default Products;