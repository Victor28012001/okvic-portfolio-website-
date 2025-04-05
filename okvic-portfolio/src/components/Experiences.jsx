import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-[#422040] mx-6 my-6 sm:block hidden"></div>
      )}
      <h3
        className={`ml-[22px] text-md lg:text-lg xl:text-xl font-bold sm:pl-8 ml-6 ${
          isActive || isMobile ? "text-[#422040]" : "text-[#ffffff]"
        }`} style={{marginLeft: "22px"}}
      >
        {experience.title}
      </h3>
      <p
        className={`ml-[22px] text-xs lg:text-sm xl:text-md sm:font-medium pt-2 sm:pl-8 ml-6 ${
          isActive || isMobile ? "text-white" : "text-[#ffffff]"
        }`} style={{marginLeft: "22px"}}
      >
        {experience.company_name} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="h-full mt-1">
      <ul className="h-full p-[12px] max-w-7xl list-none space-y-4 border-4 lg:border-2 rounded-md lg:rounded-2xl p-6 flex flex-col justify-between items-center" style={{padding: "20px"}}>
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="text-slate-500 font-semibold text-[5px] xs:text-[7px] md:text-[9px] lg:text-[11px] xl:text-[14px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20 h-full">
    {/* <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionText} text-center`}>
        Experience
      </h2>
    </motion.div> */}


      <div className="h-full relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start" style={{height: "100%"}}>
        <div className="h-full flex flex-col z-10 sm:w-auto sm:w-full justify-between items-start sm:items-start h-full sm:h-auto" style={{height: "100%"}}>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="h-full flex justify-end z-10 sm:block hidden h-full">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");
