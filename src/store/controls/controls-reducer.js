import { SET_SEARCH } from './controls-action'
import { SET_REGION } from './controls-action'
import { CLEAR_CONTROLS } from './controls-action'

const initialState = {
  search: '',
  region: '',
}

export const searchReducer = (state = initialState, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      }
    case SET_REGION:
      return {
        ...state,
        region: payload,
      }
    case CLEAR_CONTROLS:
      return initialState

    default:
      return state
  }
}
