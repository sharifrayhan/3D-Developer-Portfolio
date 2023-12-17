import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  // Replace these URLs with your actual GitHub and LinkedIn profiles
  const githubUrl = "https://github.com/sharifrayhan";
  const linkedinUrl = "https://www.linkedin.com/in/sharifrayhannafi";
  const instagramUrl = "https://instagram.com/sharifrayhannafi";

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Orange Line on the Left */}
      <div className="absolute left-0 top-0 h-full bg-orange w-1" />

      {/* Background Shapes */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-0 md:gap-3 lg:gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div className="text-center mt-[80px] flex flex-col items-center">
          <h1 className={`${styles.bannerHeadText} text-white text-center`}>
            Hello, I'm{" "}
            <span className="text-[#915EFF]">Sharif Rayhan Nafi</span>
          </h1>
          <p className={`${styles.bannerSubText} mt-2 text-white text-center`}>
            I develop websites and create awesome web experiences.
          </p>

          <div className="flex gap-7 mt-5">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub
                style={{ fontSize: "3vw", width: "3vw" }}
                color="white"
                className="hover:text-[#FF8C00] cursor-pointer"
              />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                style={{ fontSize: "3vw", width: "3vw" }}
                color="white"
                className="hover:text-[#FF8C00] cursor-pointer"
              />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <FaInstagram
                style={{ fontSize: "3vw", width: "3vw" }}
                color="white"
                className="hover:text-[#FF8C00] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="absolute bottom-10 xs:bottom-10 w-full flex flex-col justify-center items-center space-x-4">
        <a href="#about">
          <div className="w-4 h-4 lg:w-8 lg:h-8 rounded-full bg-secondary flex justify-center items-center">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 lg:w-4 lg:h-4 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
