import { styles } from "../styles";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
            <motion.div className="mb-8 text-right" variants={textVariant()}>
        <p className={styles.sectionSubText}>My</p>
        <h2 className={styles.sectionHeadText}>Skillset.</h2>
      </motion.div>
    <div className='flex flex-row px-10 flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");