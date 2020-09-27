import {TYPES} from '../actions/api';


const INITIAL_STATE = {
  breeds: [],
  isFetching: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_BREEDS:
      return { ...state , isFetching: true }
    case TYPES.FETCH_BREEDS_SUCCESS:
      return { ...state , isFetching: false, breeds: action.payload }
    case TYPES.FETCH_BREEDS_FAILURE:
      return { ...state , isFetching: false }
    default:
      return state
  }
}