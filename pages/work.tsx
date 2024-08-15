import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import "swiper/css";

const projects: any[] = [
  {
    num: "01",
    title: "Baca Pintar Apps",
    description:
      "Using java for application development, Utilizing firestore for data store and firebase authentication, and Consuming goole books API and utilizing google books API searching features",
    stack: [
      {
        name: "Java",
      },
      {
        name: "Firebase",
      },
      {
        name: "Google Books API",
      },
    ],
    image: "/baca-pintar-apps.jpg",
  },
  {
    num: "02",
    title: "CLI Data Access",
    description:
      "Using java for application development, Provide CRUD features to JSON file extension, and Collaborating with other student using github and git ",
    stack: [
      {
        name: "Java",
      },
    ],
    image: "/cli-data-access.png",
  },
  {
    num: "03",
    title: "Bootcamp Challenge Apps",
    description:
      "Showing list of product, render style based on certain condition, and manage the data with Pinia",
    stack: [
      {
        name: "Vue",
      },
      {
        name: "Typescript",
      },
      {
        name: "Pinia",
      },
    ],
    image: "/bootcamp-challenge-apps.jpg",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef: any = useRef();

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-y-3">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((val: any, index: number) => (
                  <li key={index} className="text-accent">
                    {val.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-1/2 relative mb-7">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {projects.map((project: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div></div>
                      <div className="relative">
                        <img src={project.image} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="text-primary absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 flex justify-between w-full z-40 xl:w-max xl:justify-none gap-x-3">
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="bg-accent hover:bg-accent-hover duration-500 rounded px-3 py-2 h-fit"
              >
                &lt;
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="bg-accent hover:bg-accent-hover duration-500 rounded px-3 py-2 h-fit"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
