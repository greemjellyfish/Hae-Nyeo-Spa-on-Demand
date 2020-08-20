https://redux.js.org/tutorials/essentials/part-1-overview-concepts


*************************************************
*************************************************
************-   BASIC REDUX SETUP ***************
*************************************************
*************************************************
# 1. install `redux` and `react-redux` 

# 2. create reducer function and default state
(store/treatment/reducer.js)
(store/user/reducer.js)
(store/appointment/reducer.js)

    1. const defaultState = {
        key: val
    }
    
    2. function reducer (state = defaultState, action){
        switch(action.type){
            default:
            return state
        }
    }
    3. export default reducer

# 3. create `store` with `createStore`
(store/index.js)
    1. import { createStore } from 'redux' //redux store
        import reducer from './treatment/reducer'

    2. const store = createStore(reducer)

    3. export default store

# 4. create `Provider` at top level of component hierarchy with the `store` as a prop
 react-redux
 (index.js)
 import { Provider } from 'react-redux' //provider connects react-redux 
 import store from './store'

ReactDOM.render(
//wrap App with Provider and use store as a prop
  <Provider store = {store} > //1. Wrap around the provider. //2.one prop === store importing from another file.
    <App />
  </Provider>,
)




*************************************************
*************************************************
*****-   READING STATE W mapStateToProps ********
*************-  (default state) *****************
*************************************************
*************************************************
(app.js)
# 1. import { connect } from 'react-redux'

# 2. export default connect()(App);

# 3. create mapStateToProps function
const mapStateToProps = state => {
  return {
    treatments: state.treatments
  }
}
export default connect(mapStateToProps)(App);

# 4. 
  const App = (props) => {
  console.log(props)

# 5. 
  return (
    //using className, you can CSS it by different className.
    <div className = {`App ${props.appointment.address}`}>
    <AppointmentForm appointment = {props.appointment} />
    </div>
  )

  # 6. 
  const App = ({appointment}) => { 
  
  }




*************************************************
*************************************************
**********-  READING STATE W HOOKS **************
*************-  (default state) *****************
*************************************************
**************************************************
# 1. import  `useSelector` in your component
(appointment.js)
import { useSelector } from 'react-redux' //hooks

# 2. write a selector function to return whatever piece of state is important to your component
const AppointmentForm = () => {
  const appointment = useSelector(state => state.appointment)

  return ()
}
export default AppointmentForm

# 3. 
   return (
            <div>
                {/* reading state react-redux hooks step3*/}
                {appointment.address}
            </div>
   )

# # importing multiple ruducers in one component
const PokemonMap = () => {
  const { position, pokemons, icon } = useSelector(state => {
    return {
      position: state.position,
      pokemons: state.pokemons,
      icon: state.weather.icon
    }
  })
}




*************************************************
*************************************************
*****-  UPDATING STATE W mapStateToProps ********
*************************************************
*************************************************
(app.js)

# 1. Import connect in your component
import { connect } from 'react-redux' 

# 2. import fetch function from api 
import { getTreatments, addAppointments } from '../api'

# 3. On the line where you export your component, wrap it with connect(mapStateToProps, mapDispatchToProps)(MyComponent)

export default connect(mapStateToProps, mapDispatchToProps)(App) //********* step 3


# 4. Write a mapDispatchToProps function to return helper functions for capping actions
# 5. The helper functions should call dispatch with an action object: { type: "ACTION_TYPE", payload: data }
```js
  const mapDispatchToProps = dispatch => { //********* step 3
    return {
      setTreatments: treatments => dispatch({ 
        type: "SET_TREATMENTS", 
        payload: treatments 
        })
    }
  }
```

# 6. 
```js
  componentDidMount(){//life cycle method
    getTreatments()
      .then(treatments => this.props.setTreatments(treatments)) //********* step 6 //this trigger the action. //get the treatment data then send it to the reducer(setTreatment)
  }
```

# 7. create the case that matches the mapDispatchToProps dispatch type
(treatment/reducer.js)
```js
  case "SET_TREATMENTS":
      return {
          ...state,
          treatments: action.payload
      }
```



*************************************************
*************************************************
*****-  UPDATING STATE W HOOKS ********
*************************************************
*************************************************
(app.js)

# 1. import useEffect 
import React, { useEffect } from 'react';

# 2. 
  useEffect(() => {
    getTreatments()
      .then(treatments => console.log(treatments))
  }, [])

# 3. Import useDispatch in your component
import { useSelector, useDispatch } from 'react-redux' 

# 4. Call useDispatch to get access to the dispatch function
  const dispatch = useDispatch()

# 5. Call dispatch with an action object: { type: "ACTION_TYPE", payload: data }
```js
  useEffect(() => { //step 2 //hooks
    getTreatments()
      .then(treatments => dispatch({ //step 5. Call dispatch with an action object: { type: "ACTION_TYPE", payload: data }
        type: "SET_TREATMENTS",
        payload: treatments
        }))
  }, [])
```

# 6. In your reducer, write code to handle the action type and return the new state
(treatment.reducer.js)
 case SET_TREATMENTS: //match with app.js 
            return {
                ...state,
                treatments: action.payload
            }

*************************************************
*****-  treatment/types.js ********
*************************************************
eliminate the typo error for the dispatch action object type
# 1. create `type.js` file
(store/treatment/types)

# 2. import types
(app.js)
import { SET_TREATMENTS } from '../store/treatment/types'

# 3. in the hook function, useEffect, get rid of "" quote around SET_TREATMENTS
type: SET_TREATMENTS,

# 4. import type in the reducer too
(reducer)


*************************************************
*************************************************
*****-  dispatch ********
*************************************************
*************************************************
(app.js)
# 1. create useEffect() for each api function
useEffect(() => {
       getAppointment()
      .then(appointment => dispatch({ 
        type: "SET_APPOINTMENT",
        payload: appointment
        }))
  }, [])

  useEffect(() => {
    addAppointment()
      .then(appointment => {
        dispatch({
          type: "ADD_APPOINTMENT",
          payload: appointment
        })
      })
  },[])

# 2. 