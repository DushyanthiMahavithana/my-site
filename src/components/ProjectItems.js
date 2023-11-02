import React from 'react'

function ProjectItems({pname,planguage,pabout,pyoutubelink,pgitlink}) {
    const projectTitleStyle = {
        color: 'blue', 
      };
  return (
    <div className='projectItems'>
        <p className='pname'>
        <span style={projectTitleStyle}>Project Name: </span>{pname}
        </p>
        <p className='planguage'>
        <span style={projectTitleStyle}>Languages: </span>{planguage}
        </p>
        <p className='pabout'>
        <span style={projectTitleStyle}>Brief Introduction: </span>{pabout}
        </p>
        <p className='pyoutubelink'>
        <span style={projectTitleStyle}>Project Explanation Video: </span><a href={pyoutubelink} target="_blank" rel="noopener noreferrer">
          Watch My demonstration
        </a>
        </p>
        <p className='pgitlink'>
        <span style={projectTitleStyle}>Find the code: </span><a href={pgitlink} target="_blank" rel="noopener noreferrer">
            Click here
        </a>
        </p>
      
    </div>
  )
}

export default ProjectItems
