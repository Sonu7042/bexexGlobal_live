import "../Css/footer.css";
import footer_logo from "../assets/images/footer_logo.png";
// import qr1 from '../assets/images/qr1.png';
// import qr2 from '../assets/images/qr2.png';
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import qr_code from "../assets/images/qr_code.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-flex-row">
          {/* Left columns */}
          <div className="footer-col">
            <div className="footer-title applyfont">Contact</div>
            <a
              href="mailto:bexex@official.com"
              className="footer-link applyfont"
            >
              info@bexexglobal.com
            </a>
            <div className="applyfont number-link">+91 9582390987</div>
            <div className="footer-title margin-top applyfont">
              Office Address
            </div>
            <div className="applyfont number-link">
              Plot No. 2-A, Khasra No. 51/1, Second Floor, Jai Vihar, <br />
              Najafgarh Road, Near Sant Haridas School, New Delhi - 110043
            </div>
            <div className="footer-title margin-top applyfont">
              Registered Office
            </div>
            <div className="applyfont number-link">
              Plot No. J04A, Street 12, Shiv Ram Park, 
              New Delhi - 110041
            </div>

          </div>
          <div className="footer-col cursor-pointer">
            <Link to="/" className="footer-title applyfont">
              Home
            </Link>
            <Link to="/about" className="footer-title applyfont">
              About Us
            </Link>
            <Link to="/communities" className="footer-title applyfont">
              Communities
            </Link>
          </div>
          <div className="footer-col">
            <Link
              to="/services"
              className="footer-title applyfont cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/services/Environment, Health & Safety Solutions"
              className="applyfont footer-link service_links"
            >
              Environment, Health & Safety (EHS) Solution
            </Link>
            <Link
              to="/services/Management Systems and Compliance"
              className="applyfont footer-link service_links"
            >
              Managements Systems & Compliance
            </Link>
            <Link
              to="/services/Training & Competency Development"
              className="applyfont footer-link service_links"
            >
              Training & Competency Development
            </Link>
            <Link
              to="/services/Software & Digital Solutions"
              className="applyfont footer-link service_links"
            >
              Software & Digital Solution
            </Link>
            <Link
              to="/services/ESG and Sustainability Services"
              className="applyfont footer-link service_links"
            >
              Sustainability & ESG Services
            </Link>
            <Link
              to="/services/Quality & Business Excellence"
              className="applyfont footer-link service_links"
            >
              Quality & Business Excellence
            </Link>
          </div>
          <div className="footer-col">
            <div className="footer-title applyfont">Resources</div>
            <Link to="/resources/blog" className="footer-link applyfont">
              Blog
            </Link>
            <Link to="/resources/newsletters" className="footer-link applyfont">
              Newsletters
            </Link>
          </div>
          {/* Right section with icons and QR codes */}
          <div className="footer-side">
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/share/1BvgP1zEfs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>

              <a
                href="https://www.instagram.com/bexexglobal?igsh=d2N1Z3F2Y3JwMGZ4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>

              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube />
              </a> */}

              <a
                href="https://www.linkedin.com/company/bexexglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            {/* <div className="footer-qr-block">
              <img src={qr_code} alt="QR Code 1" className="qr-main" />
              
            </div> */}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Bexex</span>
          <Link to="/PrivacyPolicy" className="footer-bottom-link applyfont">
            Privacy Policy
          </Link>
          <a href="/PrivacyPolicy" className="footer-bottom-link applyfont">
            Terms and Conditions
          </a>
        </div>
      </div>
      <img
        src={footer_logo}
        className="footer-bg-logo"
        alt="footer logo bg"
        data-aos="fade-up"
      />
    </footer>
  );
}
