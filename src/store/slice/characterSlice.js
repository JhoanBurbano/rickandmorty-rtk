import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        list: [],
        filter: [],
        view: {}
    },
    reducers: {
        setCharacterList: (state, action)=>{
            state.list=action.payload
            state.filter=action.payload
        },
        searchCharacter: (state, action)=>{
            state.list = state.filter.filter(char => {
                const regEx= new RegExp(`^${action.payload}`, 'i')
                return (char.name.toLowerCase().includes(action.payload.toLowerCase()) || regEx.test(char.gender.toLowerCase()) || regEx.test(char.species.toLowerCase()))
            })
        }
    }
})

export const {setCharacterList, searchCharacter} = characterSlice.actions;

export default characterSlice.reducer;

export const fetchAllCharacters = ()=>(dispatch)=>{
    axios('https://rickandmortyapi.com/api/character')
    .then(({data})=>dispatch(setCharacterList(data.results)))
    .catch(err => console.log(err))
}