import React, { useState } from "react";
// import miniLogo from '../assets/images/miniLogo.png'
import "../Css/newsLetter.css";
import { HeadingComponent } from "./Buttons";
import { LearnMoreButton } from "./Buttons";
import emailjs from "@emailjs/browser"; // ✅ ADDED

const NewsLetter = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // ✅ ADDED
  const [message, setMessage] = useState(""); // ✅ ADDED

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // ✅ ADDED

    emailjs
      .send(
        "service_49xn9nu",   // your service id
        "template_6ajf84j",  // your template id
        {
          from_firstName: "Subscriber", // ✅ static name since we only collect email
          from_email: email,  // ✅ sending email
          to_name: "EgrowthIndia",
          to_email: "social@swastixa.com",
        },
        "1CzwCUpKK9oXc70Dk"   // public key
      )
      .then(
        () => {
          setMessage("Subscribed successfully!"); // ✅ success message
          setEmail(""); // reset input
          setLoading(false);

          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        () => {
          setMessage("Something went wrong"); // ✅ error message
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="newsletter-bg page_indenation">
        <div className="newsletter-flex">

          {/* Left Side Title */}
          <div className="newsletter-left-news">
            <h1 className="new-text-tital applyfont">
              Get Expert Tips Straight to <br />
              <span className="itly">Your Inbox</span>
            </h1>
          </div>

          {/* Right Side Form */}
          <form className="newsletter-right" onSubmit={handleSubmit}>
            <div className="newsletter-form-group">
              <label className="newsletter-form-label">
                Subscribe to the newsletter
              </label>

              <div className="newsletter-input-row">
                <input
                  className="newsletter-input"
                  value={email}
                  placeholder="info@bexexglobal.com"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="newsletter-agree-text">
              By clicking ‘Subscribe’ you’re confirming that you agree with our
              Terms and Conditions.
            </div>

            <div className="newsletter-submit-btn">

              {/* ✅ FIX: Added type="submit" so form triggers */}
              <LearnMoreButton
                text={loading ? "Submitting..." : "Submit"}
                type="submit"
              />

            </div>

            {/* ✅ Message UI */}
            {message && (
              <p style={{ marginTop: "10px", color: "green" }}>
                {message}
              </p>
            )}

          </form>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;