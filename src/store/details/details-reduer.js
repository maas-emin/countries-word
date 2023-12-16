import {
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  CLEAR_DETAILS,
  SET_NEIGHBORS,
} from './details-action'

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
  neighbors: [],
}

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      }
    case SET_ERROR:
      return {
        ...state,
        status: 'Rejected',
        error: payload,
      }
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: 'Loading',
      }
    case CLEAR_DETAILS:
      return initialState

    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      }
    default:
      return state
  }
}
