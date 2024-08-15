import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 25,
    text: "Projects Completed",
  },
  {
    num: 5,
    text: "Technologies Learned",
  },
  {
    num: 1,
    text: "Years of Experience",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-x-9 xl:gap-x-24 gap-y-5">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-2 w-[120px]">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                ></CountUp>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
