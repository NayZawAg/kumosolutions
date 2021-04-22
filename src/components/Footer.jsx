import React from "react";

function Footer() {
    return(    
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.7904998711874!2d96.10548191478009!3d21.94260398551055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d0ee9ae4687%3A0xb4d2b9b535d89dec!2sKumo%20Solutions!5e0!3m2!1sen!2smm!4v1616478962199!5m2!1sen!2smm" width="300" height="150" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-5">
                    <img src="./images/locations.png" /> <p className="d-inline-block">(Nga Gyi/98), 64Street, Between 105 & 106Street, Mandalay, Myanmar</p>
                    <br/>
                    <i className="fas fa-phone-volume"></i><p className="d-inline-block">(+95) 9-774477275</p>
                    <p>© 2021 Kumo Solutions Co.,Ltd. All Rights Reserved</p>
                </div>
                <div className="col-3">
                    <img src="./images/facebook.png" className="mb-"/> <p className="d-inline-block">KUMO Solutions Page</p><br />           
                    <img src="./images/mail.png" /> <p className="d-inline-block">office@kumomyanmar.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;