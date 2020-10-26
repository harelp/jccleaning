import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'

const Contact = (props) =>{
    return <div className="service_body" ref={props.scrollTo}> 
        <div className="slogan">
            Contact us now for a free quote!
        </div>

        <div className="contact_container">
            <form className="contact_form">
                <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                />
                </div>
                <textarea
                    name="message"
                    placeholder="Hello!!"
                    required
                />
                <button type="submit" className="btn btn--orange" style={{ marginTop: '25px' }}>
                    Send Message
                </button>
            </form>
            <div className="contact_details">
                 <ul className="company_details">
                     <li>Contact Details</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="asd"/> Jachacky2020@gmail.com</li>
                    <li><FontAwesomeIcon icon={faPhoneSquareAlt} className="asd"/> 519-902-8514</li>
                 </ul>

                 <ul className="company_hours">
                     <li>Operating Hours</li>
                    <li>Weekdays: 24 hours</li>
                    <li>Weekends: 9am - 8pm</li>
                 </ul>
            </div>
               
        </div>
    
            
    </div>
}

export default Contact;
