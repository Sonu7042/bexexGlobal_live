import React from "react";
import "../Css/home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cardImg from "../assets/images/ISO14001Webinar2.jpeg";
import cardImg2 from "../assets/images/blog_imgs/CAPA-proces.jpeg";
import { HeadingComponent, LearnMoreButton } from "./Buttons";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/home/emergency-preparedness.webp";
import img2 from "../assets/home/free-webinar.webp";
import img3 from "../assets/home/safety-data-sheet.webp";
import "swiper/css";

const images = [
  {
    src: img1,
    // link: "https://egrowthindia.com/eg-events/emergency-preparedness-and-response-planning/",
  },
  {
    src: img2,
    // link: "https://egrowthindia.com/eg-events/fire-safety-training-prevent-protect-respond-effectively/",
  },
  {
    src: img3,
    // link: "https://egrowthindia.com/eg-events/iso-140012026-awareness-session/",
  },
];

export default function Home() {
  return (
    <>
      <div className="home-container">
        <section className="hero-section"> 
          
          <div className="heading-portion">
            <HeadingComponent
              text="Strategic Partner"
              marginTop="0"
              paddingBottom="0"
            />
          </div>

          <div className="heroContainer">
            <h1 className="hero-title">
              From Compliance Chaos to Operational{" "}
              <span className="itly">Excellence</span>
            </h1>

            <div className="headingWithBox">
              
              {/* LEFT CONTENT */}
              <div className="gap-between">
                <p className="hero-subtext">
                  Integrated EHS, Quality, and Sustainability solutions that
                  simplify complexity and deliver measurable results.
                </p>

                <LearnMoreButton
                  text="Discover more"
                  link="/services/Environment, Health & Safety Solutions"
                  marginTop="0"
                />
              </div> 

              {/* RIGHT CAROUSEL */}
              <aside className="hero-card">
                <Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  loop={true}
  speed={800}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
>
  {images.map((item, index) => (
    <SwiperSlide key={index}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <div className="square-card">
          <img src={item.src} alt={`Slide ${index + 1}`} />
        </div>
      </a>
    </SwiperSlide>
  ))}
</Swiper>
              </aside>

            </div>
          </div>

        </section>
      </div>

      {/* <hr /> */}
    </>
  );
}