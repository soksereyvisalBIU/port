import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

import "./styles/homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { EffectCreative, EffectCards, Autoplay } from "swiper/modules";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>

                <div className="subtitle about-subtitle increase-width">
                  {INFO.about.description}
                </div>
              </div>

              <div className="about-left-side">
                  <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: ["-125%", 0, -800],
                        rotate: [0, 0, -90],
                      },
                      next: {
                        shadow: true,
                        translate: ["125%", 0, -800],
                        rotate: [0, 0, 90],
                      },
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectCreative, Autoplay]}
                    className="mySwiper5 rotate-swiper"
                    // effect={"cards"}
                    // grabCursor={true}
                    // autoplay={{
                    //   delay: 3000,
                    //   disableOnInteraction: false,
                    // }}
                    // modules={[EffectCards, Autoplay]}
                    // className="mySwiper"
                  >
                    {INFO.homepage.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
