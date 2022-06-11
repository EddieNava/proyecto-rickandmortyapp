import React from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e =>  {
       e.preventDefault()
       setSearchLocation(e.target.children[0].value) 

 }
 
 
    return (

    <form className='form'  onSubmit={searchLocation}>
                <input className='input' type="text"  required={true} placeholder='Type a location id'/>
                <button className='butSearch'> Search </button>
        
        
    </form> 
  )
}

export default InputSearch


