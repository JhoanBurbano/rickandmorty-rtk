import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAllCharacters } from '../store/slice/characterSlice'
import Character from './Character'

const CharacterList = () => {
    const {list:characters} = useSelector(state => state.character)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllCharacters())
    }, [dispatch])
  return (
  <div className='container row justify-content-between border p-3 bg-light'>
    {characters.map(c=><Character key={c.id} name={c.name} species={c.species} id={c.id} image={c.image} gender={c.gender} />)}
  </div>

  )
}

export default CharacterList