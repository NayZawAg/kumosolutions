import React from "react";

var About = () => {
    return(
        <div className="container-fluid" >
        <div style={{paddingTop:100}}>
            <img src="./images/aboutcompany.jfif" className="float-right aboutCompanyImg" />
            <h4 className="aboutCompanyTitle">About the Company</h4>
            <hr className="underLine" />
            <div className="text-info text-justify">
                <p className="pl-0">"We make our History with your satisfaction."<br/>
                        Kumo Solutions was founded in 2018 in Mandalay, Myanmar with the aim of providing sophisticated
                        software
                        development related services. Empowered by the strength of local talents, we have been successfully
                        providing our services to both local and global customers.<br/>
                        We have been highly engaged in working with Taiwanese and Singaporean companies by collaborating in
                        multiple projects with successful outcomes. Our main focus is to delicver world-class End-to-End IT
                        solutions and continue to strive for improvement and innovation.</p>
                <p>To provide satisfying products to our customers, we utilize object-oriented analysis, design, and testing
                    methodologies and ensure seamless integration and traceability between the project's requirements,
                    design
                    development, quality assurance, and delivery. <br/>
                    Our goal is not only to achieve local and global customers but also to support the development of the
                    domestic Information Technology Industry. </p>
            </div>
            <div className="float-left">
                <img src="./images/team.jpg" className="globalScaleImg" />
            </div>
            <h4 className="companyDescTitle text-right">Global Scale and Agility</h4>
            <hr className="underLineTaiwan" />
            <div className="text-info text-justify">
                <p>Kumo Solutions keeps up in an environment that demands constant change through agile teamwork and
                    consistent adaptations to the latest technologies and innovations. Working with international
                    organizations and companies has also given insight on international approaches an ddifferent points of
                    views, further broadening our knowledge and capabilities. With the guided and multi-level trainings, we
                    are focused on creating a stable foundation to approach situations with better agility throughout the
                    globe.</p>
            </div>       
            
            <div className="teamIntro">      
                <h4 className="text-white text-center">Team Introduction</h4>
                <p className="text-white text-justify">This team is made up of 20 local talents who strive for the continual development of innovative and exceptional skills by adopting international & the foremost practice standards. We maintain continuous improvements by promoting a learing environment, ensuring that our employees are exposed to and trained on state-of-the-art technologies. As a team, we continue to learn together, creating a collaborative environment encouraging individual and organizational growth and development. The work environment in the company reflects a professional approach to dedicated team spirit and serves as a motivational ground for the professional and personal growth of the software talent.</p>
            </div>        
            <h4 className="aboutCompanyTitle mt-5">Operations</h4>
            <hr className="underLine" />
            
            <p className="text-info text-justify mr-10px ml-10px mb-5px">Kumo Solutions is dedicated to transforming our consumers' needs into fully realized and satisfying products by comprehensively understanding our clients' business requirements and delivering beyond their expectations. Our commitment and dedication are backed by the necessary technological skill and innovation as we craft software customized to the needs of each individual consumers' daily operations. Our software development process is continuously monitored and improved to maximize our client's ease and productivity.</p>
        </div>
        </div>
    );
}

export default About;