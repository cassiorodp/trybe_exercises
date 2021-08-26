import { combineReducers } from "redux"
import { GET_CHAR_INFO, GET_CHAR_INFO_SUCESS, GET_CHAR_INFO_FAIL } from "../actions"

const INICIAL_STATE = {
  character: '',
}

const characterReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHAR_INFO: 
      return {
        ...state,
        loading: true
      }
    case GET_CHAR_INFO_SUCESS:
      return {
        ...state,
        loading: false,
        character: action.char[0]
      }
    case GET_CHAR_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({characterReducer})

export default rootReducer