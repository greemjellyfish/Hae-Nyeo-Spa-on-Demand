import { createStore, combineReducers } from 'redux' //redux store
import treatmentReducer from './treatment/reducer'
import userReducer from './user/reducer'
import appointmentReducer from './appointment/reducer'

const rootReducer = combineReducers({
    user: userReducer,
    treatment: treatmentReducer,
    appointment: appointmentReducer
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store

// // IAN's CODE: last steps 
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import userReducer from './user/reducer'
// import treatmentReducer from './treatment/reducer'

// const rootReducer = combineReducers({
//   user: userReducer,
//   treatment: treatmentReducer
// })

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//   )
// )

// export default store