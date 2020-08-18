// *************************************************
// *************************************************
// *****-   UPDATING STATE W mapDispatchToProps ********
// ********-   UPDATING STATE W HOOKS ***********
// *************************************************
// *************************************************
//import { SET_TREATMENTS } from './types'

const defaultState = {
    treatments: [],
}

function treatmentReducer(state = defaultState, action){     
    //console.log(action)
    switch(action.type){
        case "SET_TREATMENTS": //match with app.js 
            return {
                ...state,
                treatments: action.payload
            }
        default:
            return state
    }
}

export default treatmentReducer


// *************************************************
// *************************************************
// *****-   //////////SETTING UP THE REDUCER ********
// *************************************************
// *************************************************

// import { ADD_TREATMENT, SET_TREATMENTS, FETCH_TREATMENTS } from './types'

// const defaultState = {
//     treatments: [{"name": "waxing default info", "img": "waxing.jpg"}, {"name": "name2", "img": "img2"}],
// }
// console.log("treatment default", defaultState)


// function treatmentReducer(state = defaultState, action){ 
//     //step1. purpose of this reducer function: fetch is going to call, everytime we send a new action, to calculate the next version of the state.

//     //step2. (state, action) //take in state and action which is the new state
    
//     //console.log("reducer", action.payload)

//     switch(action.type){
//         case FETCH_TREATMENTS:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case SET_TREATMENTS:
//             return {
//                 ...state,
//                 treatments: action.payload,
//                 loading: false
//             }
//         case ADD_TREATMENT:
//             return {
//                 ...state,
//                 treatments: [...state.treatments, action.payload]
//             }
//         // case APPOINTMENT_LOCATION:
//         //     return {
//         //         ...state,
//         //         appLocs: [...state.appLocs, state.appLoc],
//         //         appLoc: ""
//         //     }
        
//         // case APPOINTMENT_TIME:
//         //     return {
//         //         ...state,
//         //         appTime:action.payload
//         //     }

//         // case APPOINTMENT_PAYMENT:
//         //     return {
//         //         ...state,
//         //         appPayment:action.payload
//         //     }

//         default:
//             return state
//         //step3: if there isn't new state then use the default state. 
//     }
// }

// export default treatmentReducer
// //step4: export the reducer