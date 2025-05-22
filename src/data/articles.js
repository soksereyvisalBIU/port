import React from "react";
import INFO from "./user";
// import "./styles/homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCreative, Autoplay } from "swiper/modules";

function article_1() {
  return {
    date: "24 April 2023",
    title: "Joined Practical Training at First Cambodia Co. Ltd",
    description:
      "Training at First Cambodia Co. Ltd. for One Week, focusing on Real World Software Development, SDLC (Software Development Life Cycle), MVC (Model-View-Controller) Concept on ASP.Net, and OOP (Object-Oriented Programming) .",
    style: ``,
    keywords: [
      "Joined Practical Training at First Cambodia Co. Ltd",
      "សុខ​ សិរីវិសាល",
      "Sok Serey Visal",
      "Sok Sereyvisal",
      "Sok Serey Visal",
      "SOK SEREYVISAL",
      "SOK SEREY VISAL",
      "SOK SEREYVISAL Developer",
    ],
    body: (
      <React.Fragment>
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper2 read-article-swiper"
        >
          {INFO.articles.blogs.article_2.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    ),
  };
}

function article_2() {
  return {
    date: "August 21, 2023",
    title: "Joined Practical Training at Chief (Cambodia) Commercial Bank Plc.",
    description:
      "Training at Chief (Cambodia) Commercial Bank Plc. for One Week, focusing on Leadership and Management Skills, Software Development Life Cycle, and Computer Virus Protestion.",
    keywords: [
      "Joined Practical Training at Chief (Cambodia) Commercial Bank Plc.",
      "សុខ​ សិរីវិសាល",
      "Sok Serey Visal",
      "Sok Sereyvisal",
      "Sok Serey Visal",
      "SOK SEREYVISAL",
      "SOK SEREY VISAL",
      "SOK SEREYVISAL Developer",
    ],
    style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				.article-list {
					padding: 1rem;
					/* 	column-count: 4; */
					columns: 300px 4;
				}
				.article-list img {
					width: 100%;
					margin-bottom: 0.7rem;
					border-radius: 1.5rem;
				}
				`,
    body: (
      <React.Fragment>
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper2 read-article-swiper"
        >
          {INFO.articles.blogs.article_1.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    ),
  };
}

function article_3() {
  return {
    date: "5 February 2024",
    title: "Joined Practical Training at WinTech Cambodia Co. Ltd",
    description:
      "Training at WinTech Cambodia Co. Ltd. for One Week, focusing on Developing Real World Software Project, SDLC (Software Development Life Cycle), MVC (Model-View-Controller) Concept on Laravel 10, and Risk/Time Management.",
    style: ``,
    keywords: [
      "Joined Practical Training at WinTech Cambodia Co. Ltd.",
      "សុខ​ សិរីវិសាល",
      "Sok Serey Visal",
      "Sok Sereyvisal",
      "Sok Serey Visal",
      "SOK SEREYVISAL",
      "SOK SEREY VISAL",
      "SOK SEREYVISAL Developer",
    ],
    body: (
      <React.Fragment>
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper2 read-article-swiper"
        >
          {INFO.articles.blogs.article_3.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    ),
  };
}
function article_4() {
  return {
    date: "21 October 2024",
    title: "Joined Cambodia Skill Compitition at TVET Park Phnom Penh",
    description:
      "Cambodia Skill Competition is a competition Programme supported DGTVET to organize National Skill Competition. More than 30 Technical Training Institutes participated in competitions with a total of 61 competitors from public and private training institutes who joined the eight skills competitions arena, namely welding, bricklaying, electrical installation, IT software Solution for Business, Web Design, Graphic Design, Wall and Floor Tilling and Industrial Automation.",
    
    link:[
      'https://www.facebook.com/share/p/TsRKTsyVTNyoPSx6/?mibextid=WC7FNe'
    ],
      
    style: ``,
    keywords: [
      "Joined Cambodia Skill Compitition at TVET Park Phnom Penh.",
      "សុខ​ សិរីវិសាល",
      "Sok Serey Visal",
      "Sok Sereyvisal",
      "Sok Serey Visal",
      "SOK SEREYVISAL",
      "SOK SEREY VISAL",
      "SOK SEREYVISAL Developer",
    ],
    body: (
      <React.Fragment>
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper2 read-article-swiper"
        >
          {INFO.articles.blogs.article_4.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_4, article_3, article_2, article_1];

export default myArticles;
