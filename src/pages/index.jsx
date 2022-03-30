import * as React from "react";
import { useRef, useEffect, useContext, useState } from "react";
import { navigate } from "gatsby";
import { gsap } from "gsap";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Mousewheel,
  FreeMode,
} from "swiper";
// styles
import "swiper/css/bundle";
import "../styles/swiper.customized.css";

// components
import Layout from "../components/layout";

// contexts
import ProjectContext from "../contexts/ProjectContext";

// data
import data from "../../_mocks_/data";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Mousewheel]);
// markup
const IndexPage = () => {
  // instances
  const tweenScroll = useRef(null);
  const tweenSlide = useRef(null);
  const projectsScroll = useRef(null);
  const projectsSlide = useRef(null);
  const { currentProject, changeCurrentProject } = useContext(ProjectContext);

  // states
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    tweenScroll.current = gsap
      .timeline()
      .fromTo(
        projectsScroll.current,
        { opacity: 0, y: "-100vh" },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.2 }
      );

    return () => {
      tweenScroll.current.kill();
    };
  }, []);

  useEffect(() => {
    if (currentProject !== null) {
      tweenScroll.current.reverse();
    } else {
      tweenScroll.current.play();
    }
  }, [currentProject]);

  useEffect(() => {
    tweenSlide.current = gsap
      .timeline()
      .fromTo(
        projectsSlide.current,
        { opacity: 0, y: "100vh" },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.2 }
      );

    return () => {
      tweenSlide.current.kill();
    };
  }, []);

  useEffect(() => {
    if (currentProject === null) {
      tweenSlide.current.reverse();
    } else {
      tweenSlide.current.play();
    }
  }, [currentProject]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <Layout>
      <div
        className={`fixed h-full w-screen flex items-center justify-center z-0`}
        ref={projectsScroll}
      >
        <Swiper
          id="thumbs"
          modules={[Mousewheel, FreeMode]}
          spaceBetween={6}
          slidesPerView={12}
          mousewheel={true}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
            },
            640: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 8,
            },
            1024: {
              slidesPerView: 10,
            },
          }}
          className="w-full h-screen flex items-center justify-center"
        >
          {data.projects.map((project, key) => (
            <SwiperSlide
              key={key}
              tag="li"
              style={{ listStyle: "none" }}
              className="flex items-center justify-center"
            >
              <div className="bg-gray-400 hover:bg-gray-200 cursor-pointer w-full h-64">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-all ease-in-out delay-100 duration-300"
                  alt={project.title}
                  onClick={() => {
                    changeCurrentProject(project.slug);
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className={`fixed h-screen w-screen flex justify-center items-center z-0`}
        ref={projectsSlide}
      >
        <Swiper
          id="main"
          className="mySwiper"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Keyboard, Pagination]}
          pagination={pagination}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
          }}
          // tag="section"
          // wrapperTag="ul"
          // onInit={(swiper) => console.log("Swiper initialized!", swiper)}
          // onSlideChange={(swiper) => {
          //   console.log("Slide index changed to: ", swiper.activeIndex);
          // }}
          // onReachEnd={() => console.log("Swiper end reached")}
        >
          {data.projects.map((project, key) => (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <div className="flex flex-col justify-center mx-4 lg:mx-16 xl:mx-24 pt-20 lg:pt-14 relative">
                  <div>
                    <h2
                      className={`absolute top-3 md:-top-6 lg:-top-4 font-bold logo-font w-full text-size lg:text-9xl`}
                      style={{
                        color: project.textColor,
                        wordWrap: "break-word",
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <img
                      className="w-full h-96 object-cover"
                      src={project.image}
                      alt={project.slug}
                    />
                  </div>

                  <div
                    className="pt-12 flex items-start justify-between text-sm text-center"
                    style={{ color: project.textColor }}
                  >
                    <p className="hidden lg:block w-full">{project.title}</p>
                    <p className="underline font-bold font-xs w-full">
                      Explore
                    </p>
                    <p className="hidden lg:block w-full">
                      {project.description}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default IndexPage;
