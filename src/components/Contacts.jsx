import React from "react";

var Contacts = () => {
    return(
        <div className="container-fluid">
                <div className="row" style={{paddingTop:100}}>
                <div className="col-6">
                    <h3 className="text-primary">Contact Info</h3>
                    <i className="fas fa-phone-volume"></i>
                    <p className="d-inline-block">(+95) 9-774477275</p><br />
                    <img src="./images/mail.png" />
                    <p className="d-inline-block">office@kumomyanmar.com</p><br />
                    <img src="./images/locations.png" />
                    <p className="d-inline-block">(Nga Gyi/98), 64Street, Between 105 & 106Street, Mandalay, Myanmar</p><br />
                    <img src="./images/facebook.png" className="mb-" />
                    <p className="d-inline-block">KUMO Solutions Page</p>
                </div>
                <div className="col-6">
                    <form action="">
                        <h3 className="text-primary">Join us for your business</h3>
                        <input type="text" placeholder="Yourname*" className="yourName"/><br/>
                        <input type="email" placeholder="Youremail*"className="yourName" /><br/>
                        <textarea name="Message..." id="" cols="30" rows="5" placeholder="Message..."className="yourMessage"></textarea><br/>
                        <a href="" className="btn btn-outline-primary">Send</a>
                    </form>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.7904998711874!2d96.10548191478009!3d21.94260398551055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d0ee9ae4687%3A0xb4d2b9b535d89dec!2sKumo%20Solutions!5e0!3m2!1sen!2smm!4v1616478962199!5m2!1sen!2smm" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" className="mt-5 mb-5"></iframe>
        
            </div>
        </div>
    );
} 

export default Contacts;