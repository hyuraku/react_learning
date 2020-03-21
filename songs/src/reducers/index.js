import { combineReducers } from 'redux'

const songsReducer = ()=>{
  return [
    {title: "a", duration: '4;05'},
    {
      title: "s",
      duration: '4;05'
    },
    {
      title: "d",
      duration: '4;05'
    },
    {
      title: "f",
      duration: '4;05'
    },
  ]
}

const selectedSongReducer = (selectedSomg=null, action)=>{
  if (action.type === "SONG_SELECTED"){
    return action.payload
  }

  return selectedSomg
}

export default combineReducers({
  songs: songsReducer,
  selectedSomg: selectedSongReducer
})