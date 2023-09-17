import React from 'react'

function EventsItems({eimage,ename,eyear,eabout}) {
  const eventTitleStyle = {
    color: 'blue', 
  };
  return (
    <div className='eventsItems'>
        <div style={{backgroundImage: `url(${eimage})`}}></div>
        <p className='ename'>
        <span style={eventTitleStyle}>Name: </span>{ename}
        </p>
        <p className='eyear'>
        <span style={eventTitleStyle}>Year: </span>{eyear}
        </p>
        <p className='eabout'>
            {eabout}
        </p>
      
    </div>
  );
}

export default EventsItems
