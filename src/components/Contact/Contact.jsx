import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading"> Contact Me</h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-box">
            <input type="number" placeholder=" Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>

          <textarea name="" id="" cols="30" rows="15" placeholder="Drop a message for me"></textarea>

          <input type="submit" value="Send Message" className="btn" />

        </form>
      </section>
    </div>
  );
};

export default Contact;
