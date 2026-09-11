import React, { useState } from "react";
import "../Css/contact.css";
import { LearnMoreButton, HeadingComponent } from "./Buttons";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;

      setPhoneError(
        value.length === 10 ? "" : "Phone number must be 10 digits",
      );
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_49xn9nu",
        "template_6ajf84j",
        {
          from_firstName: form.name,
          from_email: form.email,
          from_phone: form.phone,
          from_message: form.message,
          to_name: "EgrowthIndia",
          to_email: "social@swastixa.com",
        },
        "1CzwCUpKK9oXc70Dk",
      )
      .then(() => {
        setIsSuccess(true);
        setMessage("Message sent successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setLoading(false);

        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch(() => {
        setIsSuccess(false);
        setMessage("Something went wrong");
        setLoading(false);
      });
  };
  return (
    <>
      <div className="enquiry-bg px-4 md:px-16 lg:px-12">
        {/* <div className="enquiry-nav-row">
            <span className="enquiry-nav">Contact</span>
          </div> */}

        <HeadingComponent text="Contact" paddingBottom="4" />

        <div className="enquiry-container">
          {/* Left */}
          <div className="enquiry-left">
            <h1 className="enquiry-title applyfont">
              Enquiry <span className="itly itly-color">form</span>
            </h1>
            <p className="enquiry-desc applyfont">
              Questions? Queries? Contact our team and we’ll get back to you as
              soon as possible.
            </p>
            <div className="enquiry-left-email applyfont">
              info@bexexglobal.com
            </div>
            <div className="enquiry-email-hr applyfont"></div>
          </div> 
          {/* Right */}
          <div className="enquiry-right">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label className="applyfont">
                NAME *
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>

              <label className="applyfont">
                PHONE *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
                {phoneError && <p className="error text-red-300 text-sm mt-1">{phoneError}</p>}
              </label>

              <label className="applyfont">
                EMAIL *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>

              <label className="applyfont">
                MESSAGE *
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </label>

              <div className="enquiry-form-note applyfont">
                By clicking 'Send Message' you're confirming that you agree with
                our Terms and Conditions.
              </div>
{/* 
              <div className="enquiry-send-btn">
                <button type="submit" className="bg-blue-400 px-2 py-2 rounded-sm" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div> */}


              <div className="enquiry-send-btn">
                <button type="submit"  disabled={loading} >
                  {loading ?  <LearnMoreButton text={"Submiting..."}/> : <LearnMoreButton text={"Submit"}/> }
                </button>
                 </div>

              {message && (
                <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <section className="contactmap-bg px-4 md:px-16 lg:px-12 ">
        <div className="contactmap-container">
          {/* Left: Map Image */}
          <div className="contactmap-left">
            {/* <img src={"delhiMap"} alt="Delhi Map" className="contactmap-img" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.238646920445!2d77.04526175394953!3d28.6579322104105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0452bb38a1a9%3A0xdf70d09a8928c98c!2sSihvram%20Park%2C%20Nilothi%2C%20Delhi%2C%20110041!5e0!3m2!1sen!2sin!4v1763972063123!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Right: Dark Card */}
          <div className="contactmap-right">
            <div className="contactmap-center">
              <span className="contactmap-pin">
                {/* Unicode Location Pin or replace with SVG */}
                &#128205;
              </span>
              <h2 className="contactmap-title">
                Plot No. 2-A, Kh. No. 51/1, Third Floor,Jai Vihar, Najafgarh
                Road,Near Sant Haridas School, Delhi - 110043
              </h2>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contactmap-link"
              >
                Google map
              </a>
              <div className="contactmap-hr"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
