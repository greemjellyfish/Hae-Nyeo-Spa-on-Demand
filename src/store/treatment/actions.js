import { SET_TREATMENTS, FETCH_TREATMENTS, ADD_TREATMENT } from './types'
import { getTreatments, addTreatment } from '../../api'

// thunky action!
// action that returns a function instead of returning an object
export const fetchTreatments = () => dispatch => {
  // run async code
  dispatch({ type: FETCH_TREATMENTS })

  getTreatments()
    .then(treatments => {
      // then dispatch
      dispatch({
        type: SET_TREATMENTS,
        payload: treatments
      })
    })
}

// export const postTreatment = (lat, lng) => dispatch => {
//   addTreatment(lat, lng)
//     .then(treatment => {
//       dispatch({
//         type: ADD_TREATMENT,
//         payload: treatment
//       })
//     })
// }