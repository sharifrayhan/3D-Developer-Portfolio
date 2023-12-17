import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import {
  languagesGoodAt,
  languagesExplore,
  runtimeEnvironment,
  frameworksComfortable,
  frameworksExplore,
  tools,
  database,
  librariesGoodAt,
  librariesExplore,
  frameworksGoodAt,
} from "../constants/index";
import { textVariant } from "../utils/motion";

const TechCard = ({ name, icon }) => (
  <div className="relative w-[100px] h-[120px] rounded-lg flex grayscale hover:grayscale-0 flex-col items-center gap-2 p-4 border border-gray-300 transition-transform hover:transform hover:scale-105 hover:text-white">
    <img className="h-[40px] w-[40px] rounded-full" src={icon} alt={name} />
    <h1 className="text-center text-sm">{name}</h1>
  </div>
);

const SectionSeparator = () => (
  <div className="my-8 border-t border-gray-300"></div>
);

const VerticalSeparator = () => (
  <div className="mx-4 border-l border-gray-300 h-full"></div>
);

const Skillset = () => {
  return (
    <>
      <motion.div className="mb-8 text-right" variants={textVariant()}>
        <p className={styles.sectionSubText}>My</p>
        <h2 className={styles.sectionHeadText}>Skillset<span className="text-[#915EFF]">.</span></h2>
      </motion.div>

      <div className=" flex flex-col gap-6">
        {/* Column 1 */}
        <div className="flex lg:flex-row flex-col gap-8">
          {/* Languages */}
          <div className="flex flex-col lg:w-1/2 items-center gap-4">
           <center> <h1 className="text-lg font-bold uppercase">Languages</h1></center>
            <div className="flex lg:flex-row flex-col items-center gap-4">
              
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Good At</h2>
                <div className="flex items-center gap-2">
                  {languagesGoodAt.map((card) => (
                    <TechCard key={card.name} {...card} />
                  ))}
                </div>
              </div>

              <VerticalSeparator />

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Exploring Next</h2>
                <div className="flex items-center gap-2">
                  {languagesExplore.map((card) => (
                    <TechCard key={card.name} {...card} />
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Runtime Environments */}
          <SectionSeparator />
         <div className="flex lg:w-1/2 flex-col items-center gap-4">
         <center><h1 className="text-lg font-bold uppercase">Runtime Environment</h1></center>
          <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold">Comfortable & Exploring</h2>
            <div className="flex items-center gap-4">
              {runtimeEnvironment.map((card) => (
                <TechCard key={card.name} {...card} />
              ))}
            </div>
          </div>
         </div>
          
        </div>

        {/* Column 2 */}
        <SectionSeparator />
        <div className="flex lg:flex-row flex-col  gap-8">
          {/* Libraries */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold uppercase">Libraries</h1>
            <div className="flex lg:flex-row flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Good At</h2>
                <div className="flex items-center gap-4">
                {librariesGoodAt.map((card) => (
                  <TechCard key={card.name} {...card} />
                ))}
                 </div>  
              </div>

              <VerticalSeparator />

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Exploring</h2>
                <div className="flex items-center gap-4">
                {librariesExplore.map((card) => (
                  <TechCard key={card.name} {...card} />
                ))}
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <SectionSeparator />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-lg font-bold uppercase">Frameworks</h1>
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4">
              
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Good At</h2>
                <div className="flex items-center gap-4">
                {frameworksGoodAt.map((card) => (
                  <TechCard key={card.name} {...card} />
                ))}
                </div>
              </div>

              <VerticalSeparator />

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Comfortable</h2>
                <div className="flex items-center gap-4">
                {frameworksComfortable.map((card) => (
                  <TechCard key={card.name} {...card} />
                ))}
                </div>

              </div>

              <VerticalSeparator />

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Exploring</h2>
                <div className="flex items-center gap-4">
                {frameworksExplore.map((card) => (
                  <TechCard key={card.name} {...card} />
                ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Column 3 */}
        <SectionSeparator />
        <div className="flex lg:flex-row flex-col  gap-8">
          {/* Database */}
          <div className="flex lg:w-1/2 flex-col items-center gap-4">
            <h1 className="text-lg font-bold uppercase">Database & Cloud Services</h1>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">Good At</h2>
                <div className="flex items-center gap-4">
                {database.map((card) => (
                  <TechCard key={card.name} {...card} />
                ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <SectionSeparator />
          <div className="flex lg:w-1/2 flex-col items-center gap-4">
            <h1 className="text-lg font-bold uppercase">Tools & Platforms</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {tools.map((card) => (
                <TechCard key={card.name} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skillset, "");
