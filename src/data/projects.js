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
    title: "Banking System",
    description:
      "University project to create a simple C++ program that store data in file and perform CRUD operations on it.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    linkText: "View Project",
    link: "https://github.com/soksereyvisalBIU",
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
    title: "Tourism Website",
    description:
      "University project to create a simple website using HTML, CSS, and JavaScript.",
    logo: "https://imakestuff.online/wp-content/uploads/2019/12/HTML-CSS-JS-Logo.png",
    linkText: "View Project",
    link: "https://github.com/soksereyvisalBIU",
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
    title: "E-library",
    description:
      "University project to create a simple web application using PHP and MySQL.",
    logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/php/php.png",
    linkText: "View Project",
    link: "https://github.com/soksereyvisalBIU",
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
    title: "Digital Library",
    description:
      "University project to create a simple web application using Laravel. Building a digital library to store and manage PDF books.",
    logo: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
    linkText: "View Project",
    link: "https://github.com/soksereyvisalBIU",

    link: [
      "https://www.facebook.com/share/p/TsRKTsyVTNyoPSx6/?mibextid=WC7FNe",
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
function article_5() {
  return {
    date: "21 October 2024",
    title: "BELTEI Group Website",
    description:
      "Renovate the website of BELTEI Group to be a dynamic website with admin dashbaord and user authorization using Laravel with Livewire Renovate the website of BELTEI Group to be a dynamic website with admin dashbaord and user authorization using Laravel with Livewire",
    logo: "https://avatars.githubusercontent.com/u/51960834?s=400&v=4",

    
    
    linkText: "View Project",
    link: "https://github.com/soksereyvisalBIU",

    link: [
      "https://www.facebook.com/share/p/TsRKTsyVTNyoPSx6/?mibextid=WC7FNe",
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

const myArticles = [article_5, article_4, article_3, article_2, article_1];

export default myArticles;
