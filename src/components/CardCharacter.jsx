import axios from 'axios'
import React, {useEffect, useState} from 'react'

const CardCharacter = ({resident}) => {

    const [character, setCharacter] = useState()

    useEffect (() => {

        axios.get(resident)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err)) 
    }, [])


  return (
    <article className='cardCharacter'>
        <img src={character?.image} alt="" />
        <p>Name: {character?.name}</p>
        <p>Status: {character?.status}</p>
        <p>Origin Name: {character?.origin.name}</p>
        <p> Episodes: {character?.episode.length}</p>

    </article>
  )
}

export default CardCharacter