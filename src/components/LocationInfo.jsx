import React from 'react'

const LocationInfo = ({location}) => {
  
  
    return (
    
    <article className='location'>
        
          <p className='p'>Name: </p><span className='span'>{location?.name}</span>
          <p className='p'>Type: </p><span>{location?.type}</span>
          <p className='p'>Dimension: </p><span>{location?.dimension}</span>
          <p className='p'>Population: </p><span>{location?.residents.length}</span>
    </article>
   
  )
}

export default LocationInfo