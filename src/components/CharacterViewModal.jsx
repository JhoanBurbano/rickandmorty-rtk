import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { viewCharacter } from '../store/slice/characterSlice'

const CharacterViewModal = () => {
    const {view} = useSelector(state=>state.character)
    const dispatch = useDispatch()
    return (
        <div style={{width: '100vw', height: '100vh', background: '#0004', top: 0, left:0}} className={`${!view.id?"d-none":"d-flex"} flex-column position-absolute top-0 left-0`}>
            <img src={view.image} alt="" style={{width: '300px'}}/>
            <Button onClick={()=>{dispatch(viewCharacter({}))}} >Clear</Button>
        </div>
    )
}

export default CharacterViewModal