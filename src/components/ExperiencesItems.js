import React from 'react'

function ExperiencesItems({company,position,year,skills}) {
  const experienceTitleStyle = {
    color: 'blue', 
  };
  return (
    <div className='experiencesItems'>
      <p className='company'>
      <span style={experienceTitleStyle}>Company Name: </span>{company}
      </p>
      <p className='position'>
      <span style={experienceTitleStyle}>Position: </span>{position}
      </p>
      <p className='year'>
      <span style={experienceTitleStyle}>Duration: </span>{year}
      </p>
      <p className='skills'>
      <span style={experienceTitleStyle}>Skills: </span>{skills}
      </p>

    </div>
  );
}

export default ExperiencesItems
