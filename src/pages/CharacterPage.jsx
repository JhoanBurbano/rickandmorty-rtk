import React from 'react'
import CharacterList from '../components/CharacterList'
import CharacterViewModal from '../components/CharacterViewModal'

const CharacterPage = () => {
  return (
      <>
      <h2 className='h4 my-3 text-success text-center'>It's a Full Character List</h2>
      <CharacterViewModal/>
    <CharacterList />
      </>
  )
}

export default CharacterPage