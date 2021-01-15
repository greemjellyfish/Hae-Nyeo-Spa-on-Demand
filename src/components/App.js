import React, { useEffect } from 'react'; //useEffect hooks //********* updating hooks step 1

import { useSelector, useDispatch } from 'react-redux' //********* reading hooks step 1
//useDispatch ********* updating hooks step 3

import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
//routing yes

import AppointmentForm from './appointment/AppointmentForm.js'
import BookingConfirmPage from './appointment/BookingConfirmPage'
import AppointmentPage from './appointment/AppointmentPage'
import TreatmentPage from './treatment/TreatmentPage'
import Treatment from './treatment/Treatment'
import HomePage from './HomePage'


import '../styles/style.scss'

import { getTreatments, getAppointment, addAppointment} from '../api'


const App = () => {
  const treatment = useSelector(state => state.treatment)
  const dispatch = useDispatch() //step 4 Call useDispatch to get access to the dispatch function
  const appointment = useSelector(state => state.appointment)
  const appointmentLoaded = useSelector(state => state.appointmentLoaded)
  console.log(appointment, appointmentLoaded)

  useEffect(() => { //step 2 //hooks
   console.log("hello!!!!!!!")
    getTreatments()
      .then(treatments => dispatch({ //step 5. Call dispatch with an action object: { type: "ACTION_TYPE", payload: data }
        type: "SET_TREATMENTS",
        payload: treatments
        }))
  }, [])

  useEffect(() => {
       getAppointment()
      .then(appointment => dispatch({ 
        type: "SET_APPOINTMENT", //setposition(ian's)
        payload: appointment
        }))
  }, [])//[appointment] but if i put appointment on the array, it ends in recursion. not sure why.


  // useEffect(() => {
  //   if(appointment){//if use input new appointment then fetch. change the default appoint to empty, then 
    
  //   addAppointment()
  //     .then(appointment => {
  //       dispatch({
  //         type: "ADD_APPOINTMENT",
  //         payload: appointment
  //       })
  //     })
  //   }
  // },[appointment])
  


    return (
    <Router>
      <div className = "App">
      <Switch>
        <Route exact path="/treatments" component={TreatmentPage} />  
        <Route exact path="/treatments/#/:id" component={Treatment} />
        <Route exact path="/appointment" component={AppointmentForm} />
        <Route exact path="/appointments" component={AppointmentPage} />
        <Route exact path="/bookingConfirm" component={BookingConfirmPage}/>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
    </Router>
    )
}

export default App 


// *************************************************
// *************************************************
// *****-   READING STATE W mapStateToProps ********
// *************-  (default state) *****************
// *************************************************
// *************************************************

// import { connect } from 'react-redux'; //********* reading mapState to Props step 1 

// const App = ({appointment}) => {//********* reading mapState to Props step 4(props) and step 6 {appointment} *********//

//       //********* reading mapState to Props step 3 *********//
//       const mapStateToProps = state => { 
//         return {
//           treatment: state.treatment.treatments,
//           user: state.user,
//           appointment: state.appointment
//         }
//       }

//   return ( //********* reading mapState to Props step 5 ********* //
//     //using className, you can CSS it by different className.
//     <div className = {`App ${appointment.address}`}>
//     <AppointmentForm appointment = {props.appointment} />
//     </div>
//   )
// }
// //********* reading mapState to Props step 2 *********//
// export default connect(mapStateToProps)(App); 






// *************************************************
// *************************************************
// *****-   UPDATING STATE W mapDispatchToProps ********
// *************************************************
// *************************************************
// import React from 'react';
// import { connect } from 'react-redux' //********* step 1 

// import AppointmentForm from './AppointmentForm.js'
// import TreatmentPage from './TreatmentPage'

// import '../styles/style.scss'

// import { getTreatments, addAppointments } from '../api' //********* step 2

// class App extends React.Component {

//   componentDidMount(){//life cycle method
//     getTreatments()
//       .then(treatments => this.props.setTreatments(treatments)) //********* step 6 //this trigger the action. //get the treatment data then send it to the reducer(setTreatment)
//   }

//   render(){
//     console.log(this.props) //check step 4

//     const { treatment } = this.props
//     console.log(treatment)
    
//     return (
//       <div>
//       <TreatmentPage />
//       <AppointmentForm />
//       </div>
//     )
//   }
// }
//       const mapStateToProps = state => { 
//         return {
//           treatment: state.treatment.treatments,
//           user: state.user,
//           appointment: state.appointment
//         }
//       }

//       const mapDispatchToProps = dispatch => { //********* step 4, step5
//         return {
//           setTreatments: treatments => dispatch({ //action creator
//             type: "SET_TREATMENTS", 
//             payload: treatments 
//             })
//         }
//       }

// export default connect(mapStateToProps, mapDispatchToProps)(App) //********* step 3





// *************************************************
// *************************************************
// ********-   UPDATING STATE W HOOKS ***********
// *************************************************
// *************************************************

// import React, { useEffect } from 'react'; //useEffect hooks //********* updating hooks step 1

// import { useSelector, useDispatch } from 'react-redux' //********* reading hooks step 1
// //useDispatch ********* updating hooks step 3

// import AppointmentForm from './AppointmentForm.js'
// import TreatmentPage from './TreatmentPage'

// import '../styles/style.scss'

// import { getTreatments, addAppointments } from '../api'
// import { SET_TREATMENTS } from '../store/treatment/types'

// const App = () => {

//   const treatment = useSelector(state => state.treatment)

//   const dispatch = useDispatch() //step 4 Call useDispatch to get access to the dispatch function

//   useEffect(() => { //step 2 //hooks
//     getTreatments()
//       .then(treatments => dispatch({ //step 5. Call dispatch with an action object: { type: "ACTION_TYPE", payload: data }
//         type: SET_TREATMENTS,
//         payload: treatments
//         }))
//   }, [])


//     return (
//       <div>
//       <TreatmentPage />
//       <AppointmentForm />
//       </div>
//     )
// }

// export default App 
