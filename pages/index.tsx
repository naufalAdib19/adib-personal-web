import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";

const iconStyle: string =
  "text-accent border rounded-full flex items-center justify-center w-7 h-7 p-[6px] border-accent hover:text-primary hover:bg-accent duration-500";

const listSocialMedia: any[] = [
  {
    icon: <FaGithub className={`${iconStyle}`} />,
    path: "https://github.com/naufalAdib19",
  },
  {
    icon: <FaLinkedin className={`${iconStyle}`} />,
    path: "https://www.linkedin.com/in/naufaladib/",
  },
  {
    icon: <FaInstagram className={`${iconStyle}`} />,
    path: "https://www.instagram.com/naufaladib__/",
  },
  {
    icon: <FaWhatsapp className={`${iconStyle}`} />,
    path: "https://wa.me/qr/KKPQXKJLV6BGB1 ",
  },
];

export default function Home() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* Text */}
          <div className="text-center xl:text-left xl:w-1/2 order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="text-5xl mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Naufal Adib</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              a fourth-year Information Systems student at Brawijaya University.
              I have a big interest in Front-End Environment and currently
              learning Angular, ReactJS, NextJS, and VueJS
            </p>
            {/* CV and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="lg"
                className="flex gap-x-2 items-center rounded-full bg-transparent border-accent text-accent uppercase hover:bg-accent-hover hover:text-primary duration-500"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="flex gap-x-4">
                {listSocialMedia.map((sosmed, index) => {
                  return (
                    <Link href={sosmed.path} key={index}>
                      {sosmed.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Photo Profile */}
          <div className="w-full h-full relative  xl:w-1/2 order-1 xl:order-none mb-10 xl:mb-0 flex justify-center scale-90">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
              }}
            >
              {/* image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="absolute"
              >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten ">
                  <img src="/file.png" alt="foto diri" className="scale-90" />
                </div>
              </motion.div>

              {/* circle */}
              <motion.svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#00ff99"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72"],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
        <div className="mt-5 xl:mt-5 mb-10 flex justify-center">
          <Stats></Stats>
        </div>
      </div>
    </section>
  );
}
