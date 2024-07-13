import React from 'react'

function ProjectCards({ title , description , imgUrl }) {
  return (
    <div className='projects-cards'>
        <div className='project-imagebox'>
            <img src={imgUrl} alt="" />

            <div className='project-textbox'>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
        </div>
    </div>
  )
}

export default ProjectCards