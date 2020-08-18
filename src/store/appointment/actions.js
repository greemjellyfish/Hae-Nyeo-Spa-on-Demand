import { getAppointment, addAppointment } from '../../api'

// thunky action!
// action that returns a function instead of returning an object
export const fetchAppointment = () => dispatch => {
  // run async code
  dispatch({ type: "FETCH_APPOINTMENT" })  
  
  console.log(dispatch)

  getAppointment()
    .then(Appointments => {
      // then dispatch
      dispatch({
        type: "SET_APPOINTMENT",
        payload: Appointments
      })
    })
}

export const postAppointment = () => dispatch => {
  addAppointment()
    .then(Appointment => {
      dispatch({
        type: "ADD_APPOINTMENT",
        payload: Appointment
      })
    })
}