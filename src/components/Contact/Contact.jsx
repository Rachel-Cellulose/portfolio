import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false); 

   const sendEmail = (e) => {
    e.preventDefault();
  setIsSubmitting(true);


    emailjs
      .sendForm("service_m4x5fdb", "template_1byehpt", form.current, {
        publicKey: "WTJO5hflSYuvuf7BT",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("MESSAGE SUCCESSFULLY SENT!");
          setMessage("Message successfully sent!!!!"); 
            setIsSubmitting(false);
             setShowModal(true);
              form.current.reset(); 

        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send message. Please try again."); 
           setIsSubmitting(false);
            setShowModal(true);
        }
      );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" name="user_name" />
            <input type="email" placeholder="Email Address" name="user_email" />
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder=" Mobile Number"
              name="phone_number"
            />
          </div>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="15"
            placeholder="Drop a message for me"
          ></textarea>

          <input
            type="submit"
            value={isSubmitting ? "Sending..." : "Send Message"}
            className={`btn ${isSubmitting ? "btn-submitting" : ""}`}
          />
        </form>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{message}</p>
            <button onClick={closeModal} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
