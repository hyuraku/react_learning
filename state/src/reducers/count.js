import { INCREMENT DECREMENT } from '../actions'

const initialState = { value: 0}

export default(state = initialState, action)=>{
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 2}
    case DECREMENT
      return { value: state.value * 2}
    default:
      return state
  }
}
