const defaultState = {
   appointment: [
       {address:"default address",
       time: "default time",
       payment: "default payment",
       user_id:8,
       treatment_id:8,
       appointmentLoaded:false }
   ]
}
//console.log("app default", defaultState)

function appointmentReducer (state = defaultState, action){

    console.log("appointment reducer", action)

    switch(action.type){
        // case "FETCH_APPOINTMENT":
        // return {
        // ...state,
        // appointmentLoaded: true
        //  }
        case "SET_APPOINTMENT": //setposition in ian's
        return {
        ...state,
        appointment: action.payload,
        appointmentLoaded: true
        }
        case "ADD_APPOINTMENT":
        return {
            ...state,
            appointment: [...state.appointment, action.payload]
        }
    default: 
         return state
    }
}

export default appointmentReducer