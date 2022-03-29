import * as React from "react";
import { useRef, useEffect, useContext, useState } from "react";
import { navigate } from "gatsby";
import { gsap } from "gsap";
// scroll
import LocomotiveScroll from "locomotive-scroll";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

// components
import Layout from "../components/layout";

// contexts
import ProjectContext from "../contexts/ProjectContext";

// data
import data from "../../_mocks_/data";

// styles
import "swiper/css/bundle";
import "../styles/swiper.customized.css";

// markup
const IndexPage = () => {
  // instances
  const ref = useRef(null);
  const tween = useRef(null);
  const projects = useRef(null);
  const { currentProject, changeCurrentProject } = useContext(ProjectContext);

  useEffect(() => {
    tween.current = gsap
      .timeline()
      .fromTo(
        projects.current,
        { opacity: 0, y: "100vh" },
        { opacity: 1, y: 0, duration: 0.5 }
      );

    return () => {
      tween.current.kill();
    };
  }, []);

  useEffect(() => {
    if (currentProject === null) {
      tween.current.reverse();
    } else {
      tween.current.play();
    }
  }, [currentProject]);

  // useEffect(() => {
  //   if (ref) {
  //     if (typeof window === "undefined" || !window.document) {
  //       return;
  //     }
  //     const scroll = new LocomotiveScroll({
  //       el: ref.current,
  //       smooth: true,
  //       direction: "horizontal",
  //       multiplier: 0.5,
  //       getSpeed: true,
  //     });
  //   }
  // }, []);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <Layout>
      <button
        onClick={() => changeCurrentProject(null)}
        className="text-white font-bold"
      >
        Toggle
      </button>
      <button onClick={() => changeCurrentProject("project-2")}>
        <p className="text-white font-bold">p2</p>
      </button>
      {/* <div
        data-scroll
        ref={ref}
        className={`h-full w-full flex items-center z-10 ${
          currentProject === null ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-2 items-center justify-center">
          <div className="bg-transparent h-64" style={{ width: "42rem" }}></div>

          {data.projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-400 hover:bg-gray-200 cursor-pointer w-20 h-64"
              onClick={() => {
                switchCurrentProject(project.slug);
              }}
            >
              <img
                src={project.image}
                className="w-full h-full object-cover grayscale hover:filter-none transition-all ease-in-out delay-100 duration-300"
                alt=""
              />
            </div>
          ))}

          <div className="bg-transparent h-64" style={{ width: "42rem" }}></div>
        </div>
      </div> */}

      <div
        className={`fixed z-0 h-screen w-screen flex items-center justify-center`}
        ref={projects}
      >
        <Swiper
          modules={[Keyboard, Navigation]}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          initialSlide={2}
          className="mySwiper"
        >
          {data.projects.map((project, key) => (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <div className="flex flex-col justify-center py-6 lg:py-12 mx-24 relative">
                  <div className="absolute top-0">
                    <h1 className="text-3xl lg:text-8xl text-gray-300 font-bold">
                      {project.title}
                    </h1>
                  </div>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <img
                      className="w-full h-96 object-cover"
                      src={project.image}
                      alt={project.slug}
                    />
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
