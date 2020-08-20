import React from 'react'
import { useSelector, useDispatch } from 'react-redux'//hooks

const LocationForm = ( {eachAppointment} ) => {
    //console.log(eachAppointment)

    const appointment = eachAppointment? eachAppointment : ""
    console.log("??????", appointment.address)

    const address = useSelector( state => state.appointment.appointment[0].address) //useSelector hook will get the redux state

    const dispatch = useDispatch() 

    // const handleSubmit = e => {
    // e.preventDefault()
    // dispatch({ type: "ADD_APPOINTMENT"})
    // }

    return (
        <div>
            address:::::::::
            {appointment.address}<br></br>
            {appointment.payment}<br></br>
            {appointment.time}<br></br>
            {appointment.user_id}<br></br>
            {appointment.treatment_id}<br></br>
      
            {/* <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={address} 
                onChange={e => dispatch({ 
                            type: "ADD_APPOINTMENT", 
                            payload: e.target.value })} />
            <button> submit location </button>
            </form>  */}

        </div>
    )
}

export default LocationForm
