import React from 'react'
import { useSelector, useDispatch } from 'react-redux'//hooks

const PaymentForm = () => {

    const payment = useSelector(state => state.appointment.appointment[0].payment) //useSelector hook will get the redux state
   // console.log(payment)

    const dispatch = useDispatch() //useDispatch hook will dispatch the action
    //console.log(dispatch)

    const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "ADD_APPOINTMENT"})
    }

    return (
        <div>
            <h5> what's your credit card info? </h5>
            payment ::::::::::: {payment}
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={payment} 
                onChange={e => dispatch({ 
                            type: "ADD_APPOINTMENT", 
                            payload: e.target.value })} />
            <button>submit card info</button>
            </form>
        </div>
    )
}

export default PaymentForm