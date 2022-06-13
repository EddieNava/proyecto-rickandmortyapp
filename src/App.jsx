import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import ImagenPrin from './assets/ImagenPrincipal.jpg'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [loading, setLoading] = useState(false)

  const [searchLocation, setSearchLocation] = useState()

  const location = useLocationApi(searchLocation)
  
  
  useEffect (() => {
    setLoading(true)
    setTimeout(() => {
      setLoading (false)
    }, 2000)
    
   }, [searchLocation])
  
    return (
     
      <div className="App">
       
       { loading?
         <ClipLoader  color={`#FFFFFF`} loading={loading} size={30} /> 
         : <>
          <header className='header'>
             <img src={ImagenPrin} /> 
             <InputSearch setSearchLocation={setSearchLocation} />
          </header>
          <h1 className='h1'> Location Info </h1> 
          <div>
            <LocationInfo location={location} />
          </div>
          <h1 className='h1'> Residents </h1>
          <div className='characters'> 
         
            {location?.residents.map(resident => (
              <CardCharacter
                resident={resident}
                key={resident}
           />
           ))}
           </div>
       </> } 
      </div> 
    ) 
  }



export default App

