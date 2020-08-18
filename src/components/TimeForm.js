import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TimeForm = () => {
  //console.log("TIME RENDERINGGGG")
  const time = useSelector(state  => 
    state.appointment.appointment[0].time)
  console.log("time123!", time)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "ADD_APPOINTMENT"})
    }

  //console.log("Time Form 1234 dispatch", dispatch)
    return (
        <div>
            <h5> what time would you like your spa service? </h5>
            time :) !!!  {time}
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={time} 
                onChange={e => dispatch({ 
                            type: "ADD_APPOINTMENT", 
                            payload: e.target.value })} />
                <button> submit time </button> 
            </form>
        </div>
    )
}

export default TimeForm