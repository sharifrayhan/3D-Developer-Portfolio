
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt         options={{
    max: 45,
    scale: 1,
    speed: 450,
  }} className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full violet-gradient p-[1px] rounded-[20px] my-card-shadow'
    >
      <div

        className='bg-[#1f1f1f] rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 -mt-11 h-16 object-contain'
        />

        <h3 className='text-white my-3 text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get to Know</p>
        <h2 className={styles.sectionHeadText}>About Me<span className="text-[#915EFF]">.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
        Hello, I'm Sharif Rayhan Nafi from Khulna, Bangladesh, a recent graduate with a degree in Public Administration from BSMRSTU. My journey into web development began with a curiosity about how applications work. I delved into various YouTube videos to learn more about it. Coming from a graphic design background, I've found a natural fit in frontend development, thanks to my keen sense of design. Over the past eight months, I've dedicated myself to learning and honing my skills. I am now confident in frontend technologies and have explored various tools and frameworks. Now I'm looking for opportunities to expand my expertise and use my skills to making websites that look awesome and work well.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
