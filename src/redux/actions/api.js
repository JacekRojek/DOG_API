export const TYPES = {
  FETCH_BREEDS: 'FETCH_BREEDS',
  FETCH_BREEDS_SUCCESS: 'FETCH_BREEDS_SUCCESS',
  FETCH_BREEDS_FAILURE: 'FETCH_BREEDS_FAILURE',
  GET_RANDOM_IMG: 'GET_RANDOM_IMG',
  GET_RANDOM_IMG_SUCCESS: 'GET_RANDOM_IMG_SUCCESS',
  GET_RANDOM_IMG_FAILURE: 'GET_RANDOM_IMG_FAILURE'
} 

const URL = 'https://dog.ceo/api';

export const fetchBreeds = () => async (dispatch) => {
    dispatch({ type: TYPES.FETCH_BREEDS })
    try {
      const resp = await fetch(URL + '/breeds/list/all')
      const json = await resp.json()
      dispatch({
        type: TYPES.FETCH_BREEDS_SUCCESS,
        payload: Object.keys(json.message)
      })
    }
    catch {
      dispatch({
        type: TYPES.FETCH_BREEDS_ERROR,
        payload: 'Network Error'
      })
    }
 }

 export const getRandomImg = (breed) => async (dispatch) => {
    dispatch({ type: TYPES.GET_RANDOM_IMG, payload: breed })
    try {
      const resp = await fetch(`${URL}/breed/${breed}/images/random`)
      const json = await resp.json()
      dispatch({
        type: TYPES.GET_RANDOM_IMG_SUCCESS,
        payload: json.message
      })
    }
    catch {
      dispatch({
        type: TYPES.GET_RANDOM_IMG_ERROR,
        payload: 'Network Error'
      })
    }
 }