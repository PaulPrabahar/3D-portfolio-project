import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 
            className="text-white font-bold text-[24px]"
          >{name}</h3>
          <p
            className="mt-2 text-secondary text-[14px]"
          >{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p  key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works....</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a full stack developer, I've had the opportunity to work on a
          variety of projects, each presenting unique challenges and
          opportunities for growth. From developing interactive web applications
          to crafting robust backend systems, my portfolio showcases my diverse
          skill set and passion for creating innovative solutions. Leveraging
          technologies such as React.js, Node.js, and MongoDB, I've contributed
          to projects spanning e-commerce platforms, social networking apps, and
          more. Whether it's building intuitive user interfaces or architecting
          scalable backend architectures, I'm committed to delivering
          high-quality software that meets the needs of users and exceeds
          expectations.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
