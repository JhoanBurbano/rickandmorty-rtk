import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCharacter } from '../store/slice/characterSlice'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-50">
      <input type="text" className="form-control" onChange={(e)=>dispatch(searchCharacter(e.target.value))} name="" id="" aria-describedby="helpId" placeholder="Search a name or gender..."/>
    </div>
  )
}

export default Search