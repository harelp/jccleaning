import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Contact = (props) =>{
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (evt) => {
    evt.preventDefault();

    setIsSubmitting(true);
    try {
      await axios({
        method: 'POST',
        url: 'https://formspree.io/f/xwkwogkz',
        data: new FormData(evt.target),
      });
      alert('Thank you, We will be in touch with you soon!');
      evt.target.reset();
    } catch (error) {
      alert(error);
    }

    setIsSubmitting(false);
  };

    return <div className="service_body" ref={props.scrollTo}> 
        <div className="slogan">
            Contact us now for a free quote!
        </div>

        <div className="contact_container">
            <form onSubmit={handleSubmit} className="contact_form">
                <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                     disabled={isSubmitting}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                     disabled={isSubmitting}
                />
                </div>
                <textarea
                    name="message"
                    placeholder="Hello!!"
                    required
                     disabled={isSubmitting}
                />
                <button type="submit" className="btn btn--orange" style={{ marginTop: '25px' }} disabled={isSubmitting}>
                    Send Message
                </button>
            </form>
            <div className="contact_details">
                 <ul className="company_details">
                     <li>Contact Details</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="asd"/> Jachucky2020@gmail.com</li>
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
