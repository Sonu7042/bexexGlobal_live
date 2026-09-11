import React, { useState } from "react";
import "../Css/resourceNewsLetter.css";
import LetsConnect from "./LetsConnect";
import Footer from "./Footer";
import { LearnMoreButton, HeadingComponent } from "./Buttons";
import emailjs from "@emailjs/browser";

const ResourcesNewsLetter = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data")

    setLoading(true);

    emailjs
      .send(
        "service_49xn9nu",
        "template_6ajf84j",
        {
          // ✅ FIX: template variable should match emailjs template
          from_firstName: form.name,
          from_email: form.email,
          to_name: "EgrowthIndia",
          to_email: "social@swastixa.com",
        },
        "1CzwCUpKK9oXc70Dk"
      )
      .then(
        () => {
          setMessage("Subscribed successfully!");

          setForm({
            name: "",
            email: "",
          });

          setLoading(false);

          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        () => {
          setMessage("Something went wrong");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="page_indenation seven-size-adjust">
        <HeadingComponent text="Newsletter" paddingBottom="4" marginTop="20" />

        <div className="newsletter-wrapper">
          <div className="newsletter-left applyfont">
            <h1>
              Subscribe for weekly <span className="itly">EHS and Quality</span>{" "}
              updates.
            </h1>

            <h2 className="newsletter-value">
              Explain the value in short, attractive lines:
            </h2>

            <ul className="newsletter-list">
              <li>Get insights that help you work smarter, not harder.</li>
              <li>Stay ahead with expert guidance in minutes.</li>
              <li>
                Learn trends that impact safety, quality, and sustainability.
              </li>
              <li>Turn complex industry changes into simple actions.</li>
              <li>Improve compliance and performance with every issue.</li>
              <li>Save time—get curated insights that actually matter.</li>
              <li>Make better decisions backed by real expertise.</li>
              <li>Grow your knowledge with quick, practical tips.</li>
            </ul>

            <div className="newsletter-trusted">
              <span className="bold">
                Your trusted source for <br />
                EHS, Sustainability, and Compliance intelligence.
                <br />
                Delivered straight to your inbox.
              </span>
            </div>
          </div>

          <div className="newsletter-right">
            <div className="newsletter-card">
              <h2>
                <span className="itly bold">Subscribe for:</span>
                <br />
                <span className="bold">
                  Safety, Quality & Sustainability—Simplified
                </span>
              </h2>

              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={onChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={onChange}
                  required
                />

                <small className="applyfont">
                  By clicking 'Subscribe' you're confirming that you agree with
                  our Terms and Conditions.
                </small>

                <div className="newsletter-submit">
                  

                  {/* ✅ FIX: Use native button to trigger form submit */}
                  <button type="submit" disabled={loading}>
                    <LearnMoreButton
                      text={loading ? "Submitting..." : "Submit"}
                      color="white"
                    />
                  </button>

                </div>

                {message && (
                  <p style={{ marginTop: "10px", color: "green" }}>{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <LetsConnect />
      <Footer />
    </>
  );
};

export default ResourcesNewsLetter;