import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query)
      .then((data) => { setProjects(data); })
  }, [])
  

  return (
    <>
      <h2 className='head-text'>My <span>Projects</span></h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__projects-portfolio'
      >
        {projects.map((projects, index) => (
          <div className='app__projects-item app__flex' key={index}>
            <div className='app__projects-img app__flex'>
              <img src={urlFor(projects.imgUrl)} alt="projects.name" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__projects-hover app__flex'
              >
                <a href={projects.projectLink} target='_blank' rel='noreferrer'>
                  <div className='app__flex'>
                    <AiFillEye />
                  </div>
                </a>

                <a href={projects.codeLink} target='_blank' rel='noreferrer'>
                  <div className='app__flex'>
                    <AiFillGithub />
                  </div>
                </a>
              </motion.div>
            </div>

            <div className='app__projects-content app__flex'>
              <h4 className='bold-text'>{projects.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{projects.description}</p>
            </div>
          </div>
        ))}
      </motion.div>      
    </>
  )
}

export default AppWrap(
  MotionWrap(Projects, 'app__projects'),
  'Projects',
  'app__primarybg'
);
