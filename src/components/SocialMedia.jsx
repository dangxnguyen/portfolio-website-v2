import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'; 

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/dang-nguyen-b8029a193/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        </div>
        <div>
          <a href="https://github.com/dangxnguyen" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/dxnguyen14/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia
