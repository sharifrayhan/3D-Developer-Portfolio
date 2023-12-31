import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Button/style.css";
import webicon from "../assets/webicon.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      className=""
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <div
        className={`bg-[#1f1f1f] flex gap-5 p-5 hover:scale-110  rounded-2xl w-full ${
          index % 2 === 0
            ? "flex-col lg:flex-row"
            : "flex-col lg:flex-row-reverse"
        }`}
      >
        <div className="relative">
          <img
            src={image}
            alt="project_image"
            className="w-full lg:w-[800px] object-cover rounded-2xl"
          />

          {/* <div className='absolute inset-0 flex m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        </div>

        <div className="flex flex-col w-full justify-between">
          <div className="">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex my-1 gap-2">
              <button
                onClick={() => window.open(live_link, "_blank")}
                className="WebBtn"
              >
                <span className="WebSvgContainer">
                  <img className="h-3 md:h-5" src={webicon} alt="" />
                </span>
                <span className="WebBg"></span>
              </button>
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="GithubBtn"
              >
                <span className="GithubSvgContainer">
                  <img className="h-5 md:h-7" src={github} alt="" />
                </span>
                <span className="GithubBg"></span>
              </button>
            </div>
            <div className="my-1 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <p className=" text-secondary text-[14px]">{description}</p>
          </div>

          {/* <div className="cursor-pointer" onClick={() => window.open(live_link, "_blank")}>
          <p className="text-sm blue-text-gradient">Live Link</p>
        </div> */}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My recent</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following are some projects i have recently worked on.
        </motion.p>
      </div>

      <div className="mt-20 flex  flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
