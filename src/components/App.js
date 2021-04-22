import React from "react";

var App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 py-5" >
          <h1 className="companyName">KUMO</h1>
          <h3 className="companyTitle">SOLUTIONS</h3>
          <div className="companySlogan">
            <h3>Commited to People,</h3>
            <h3 className="pb-5">Commited to the Future</h3>
            <h3 className="pt-4">Vision</h3>
          </div>
          <p className="text-info">To grow local IT industry & provide world className outsourcing services.</p>
        </div>
        <div className="col-7" style={{marginTop:70}}>
          <img src="../images/acbel.jpeg" className="absolutePicOne" />
          <img src="../images/crm.jpeg" className="absolutePicTwo" />
          <img src="../images/ibpemwhite.jpeg" className="absolutePicThree" />
        </div>
      </div>
      <img src="./images/devservice.jfif" className="float-right devservice" />
      <h4 className="companyDescTitle">KUMO Solutions is a Software Development Company</h4>
      <hr className="underLine" />
      <div className="text-info text-justify">
        <div className="row">
          <p className="col-12 pl-0">Established in 2018 to navigate customers through the next generation of business
          innovation through empowered software development technology and skill. We deliver high value solutions by
                    bridging the gap between business and technology.<br />
                     Our Priority is to be a reliable service provider who gives our best to serve clients in a professional
                    and effective manner. We have multiple partnerships both locally and globally in Taiwan, Singapore and
                     Australia.<br />
                    The state-of-the-art platform is designed to support scalable and multi-tenanted products, supported by a
                    full stack of tools including Dashboard, Data ETL, Report and Machine Learning.</p>
        </div>
        <p>We bring the product mindset to the services industry. For companies operating in the information age, we
                help our customers to leverage new technologies into competitive advantages to the customers' produts.</p>
        <button type="submit" className="seeMoreButton">See More About Company</button>
      </div>
      <div className="partners">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} className="mt-3 text-center">
          <div style={{ backgroundColor: "blue", width: 30, height: 30, borderRadius: 50, position: "relative" }}><i
            className="fas fa-stack-1x fa-building"></i>
          </div>
          <h4 className="m-0">Partner Company</h4>
        </div>
        <hr className="underLinePartner" />
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} className="mt-5 text-center">
        <div style={{ backgroundColor: "blue", width: 30, height: 30, borderRadius: 50, position: "relative" }}><i
          className="fas fa-wrench"></i></div>
        <h4 className="m-0 ourServicesTitle">Our Services</h4>
      </div>
      <hr className="underLinePartner" />

      <div className="row">
        <div className="col-2 ourServices">
          <i className="fas fa-share-alt-square"></i>
          <p>Data <br />Analytics</p>
        </div>

        <div className="col-2 ourServices">
          <i className="fas fa-globe"></i>
          <p>Web <br />Development</p>
        </div>
        <div className="col-2 ourServices">
          <i className="fas fa-mobile-alt"></i>
          <p>Mobile <br /> Development</p>
        </div>
        <div className="col-2 ourServices">
          <i className="fas fa-laptop"></i>
          <p>UI/UX <br /> Design</p>
        </div>
        <div className="col-2 ourServices">
          <i className="fas fa-warehouse"></i>
          <p>Data <br /> Housing</p>
        </div>
      </div>
      <div className="partners">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} className="mt-3 text-center">
          <div style={{ backgroundColor: "blue", width: 30, height: 30, borderRadius: 50, position: "relative" }}><i
            className="fas fa-laptop"></i></div>
          <h4 className="m-0">Previous Products</h4>
        </div>
        <hr className="underLinePartner" />
      </div>
      <img src="./images/ipbem.jpeg" className="float-right machineLearingImg" />
      <h4 className="companyDescTitle">Real time machine learning platform</h4>
      <hr className="underLine" />
      <div className="text-info text-justify">
        <div className="row">
          <p className="col-12 pl-0">Through partnerships with CapitalLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This plaform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singaproe (NTU), this platform provides users real-time alarm system of chillers by learning and training machines' behaviours through machine learning algorithms. </p>
        </div>
      </div>
      <div className="float-left">
        <img src="./images/acbel.jpeg" className="taiwanCentralizedImg1" />
        <img src="./images/acbel1.jpeg" className="taiwanCentralizedImg2" />
      </div>
      <h4 className="companyDescTitle text-right">Taiwan Centralized</h4>
      <hr className="underLineTaiwan" />
      <div className="text-info text-justify">
        <p>Taiwan Centralized Project for Acbel is the centralized chiller system for mornitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system. </p><br />
        <p>The system provides chiller system's latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.</p>
      </div>
      <div className="float-right">
        <img src="./images/crm1.jpeg" className="crmImg1" />
        <img src="./images/crm.jpeg" className="crmImg" />
      </div>
      <h4 className="companyDescTitle">CRM Modules</h4>
      <hr className="underLine" />
      <div className="text-info text-justify">
        <div className="row">
          <p className="col-12 pl-0">Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.</p>
        </div>
      </div>
      <button type="submit" class="seeMoreButton">See More Products</button>
    </div>
  );
}

export default App;
