import {TYPES} from '../actions/api';


const INITIAL_STATE = {
  breeds: [],
  isFetching: false,
  selectedBreed: '',
  imgURL: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_BREEDS:
      return { ...state , isFetching: true }
    case TYPES.FETCH_BREEDS_SUCCESS:
      return { ...state , isFetching: false, breeds: action.payload }
    case TYPES.FETCH_BREEDS_FAILURE:
      return { ...state , isFetching: false }
    case TYPES.GET_RANDOM_IMG:
      return { ...state , isFetching: true, selectedBreed: action.payload, imgURL: '' }
    case TYPES.GET_RANDOM_IMG_SUCCESS:
      return { ...state , isFetching: false, imgURL: action.payload }
    case TYPES.GET_RANDOM_IMG_FAILURE:
      return { ...state , isFetching: false }
    default:
      return state
  }
}