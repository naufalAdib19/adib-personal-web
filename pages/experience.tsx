import React from "react";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const experienceList: any[] = [
  {
    num: "01",
    title: "Junior Frontend Developer (MSIB 6) - Kemenkeu",
    description: [
      "Participated in the development of two web-based applications using Angular Framework",
      "Implemented state management using RxJS, improving application performance and user experience",
      "Gained practical experience with design patterns, particularly the Observer Pattern, to create scalable and maintainable code.",
    ],
  },
  {
    num: "02",
    title: "Frontend Project Based Internship Program",
    description: [
      "Converted design from Figma to HTML code and using atomic design principles for create maintanable and reusable component.",
      "Utilized Vue.js and TypeScript programming language for application development",
      "Utilized the Pinia library for global state management, ensuring consistent and predictable application state.",
    ],
  },
  {
    num: "03",
    title: "Equipment Division (Volunteer Experience)",
    description: [
      "Negotiated equipment rentals and procurement deals with various vendors",
      "Organized and distributed event equipment, ensuring timely setup and smooth operations",
    ],
  },
];

const Experience = () => {
  return (
    <section>
      <div className="container mx-auto pb-9">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          {experienceList.map((exp, index) => {
            return (
              <div
                className="group flex flex-col gap-y-4 border-b border-white/30 py-4 w-full"
                key={index}
              >
                <div className="flex items-center justify-between w-full ">
                  <p className="text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent  transition-all duration-500 w-full">
                    {exp.num}
                  </p>
                  <div className="bg-white p-2 rounded-full group-hover:bg-accent transition-all duration-500 hover:-rotate-45">
                    <BsArrowDownRight className="text-primary" />
                  </div>
                </div>
                <div className="text-sm group-hover:text-accent transition-all duration-500">
                  {exp.title}
                </div>
                <div className="text-white/80 text-base">
                  <ul className="list-disc list-inside">
                    {exp.description.map((desc: string, index: number) => (
                      <li key={index} className="mb-1">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
