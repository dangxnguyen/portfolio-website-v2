import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const degreesQuery = '*[_type == "degrees"]';

    client.fetch(skillsQuery)
      .then((data) => { setSkills(data); });

    client.fetch(degreesQuery)
      .then((data) => { setDegrees(data) });
  }, []);
  
  return (
    <>
      <h2 className='head-text'>Skills & Education</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__skills-edu'>
            {degrees.map((degree) => (
              <motion.div
                className='app__skills-edu-item'
                key={degree.year}
              >
                <div className='app__skills-edu-year'>
                  <p className='bold-text'>{degree.year}</p>
                </div>
                <motion.div className='app__skills-edu-works'>
                  {degree.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-edu-work'
                        data-tip
                        data-for={work.school}
                        key={work.school}
                      >
                        <h4 className='bold-text'>{work.school}</h4>
                        <p className='p-text'>{work.major}</p>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Skills',
  'app__whitebg'
);