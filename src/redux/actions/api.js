export const TYPES = {
  FETCH_BREEDS: 'FETCH_BREEDS',
  FETCH_BREEDS_SUCCESS: 'FETCH_BREEDS_SUCCESS',
  FETCH_BREEDS_FAILURE: 'FETCH_BREEDS_FAILURE'
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