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
      .sendForm(
        "service_pcm3ea3",
        "template_j5se86f", 
        form.current,
        "WTJO5hflSYuvuf7BT" 
      )
      .then(
        (result) => {
          console.log("MESSAGE SUCCESSFULLY SENT!", result.text);
          setMessage(
            "Message successfully sent! Thank you for reaching out/feedback. I will get back to you shortly."
          );
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
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="user_email"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              name="phone_number"
              required
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="15"
            placeholder="Drop a message for me"
            required
          ></textarea>

          <input
            type="submit"
            value={isSubmitting ? "Sending..." : "Send Message"}
            className={`btn ${isSubmitting ? "btn-submitting" : ""}`}
            disabled={isSubmitting}
          />
        </form>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{message}</p>
            <button onClick={closeModal} className="modal-close-btn">
              &#x2716;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
