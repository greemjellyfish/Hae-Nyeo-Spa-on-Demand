import React from 'react'
import { Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const AppointmentUD = ({appointment}) => {

//   state = {
//        address: appointment.address,
//        time: appointment.time,
//        payment: appointment.payment,
//        user_id:1,
//        treatment_id:1 
//   } 

//   handleInputChange = e => {
//       //debugger
//     console.log(e.target.value, e.target.name)
//     this.setState({
//       [e.target.name]: e.target.value
//     })
// }


// handleSubmit = () => {
//    console.log("submitting form...") 
//     //form step 5-3
//     const bodyData = {
//       "address": this.state.address,
//       "time": this.state.time,
//       "payment": this.state.payment,
//       "user_id": 1,
//       "treatment_id": 1 
//     }
//     console.log("BODYDATA", bodyData)

// const updateAppointment = () => {
//     fetch(`http://localhost:3000/api/v1/users/1/appointments/${appointment.id}`,{
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//       body: JSON.stringify()        
//     })
//             .then(r => r.json())
//             .then(updatedAppointments => {
//                 appointment.({updatedAppointments})           
//             }
//             )
// }

// listingsSection.addEventListener("click", e => {

//     // if(e.target.matches(".btn-left"))
//     if(e.target.matches(".btn-left")){
//     //1. when user clicks a left btn event happens 
//     console.log("left specific button was clicked")
//     const outerCard = event.target.closest(".card")
//     console.log(outerCard)
//     console.log(outerCard.dataset.id)//<div class="card" data-id="1" data-rei="nice guy">
//     const listingId = outerCard.dataset.id

//     //2. do DELETE /listings/:id  fetch request //mdn using fetch
//     fetch(`http://localhost:3000/listings/${listingId}`, { //need to declare listingId. look at renderOneListing function! 
//         method: "DELETE"
//     }
//     )


// const deleteAppointment = () => {
//     fetch(`http://localhost:3000/api/v1/users/1/appointments/${appointment.id}`,{
//         method: "DELETE",
//     })
// }

return(
    <div>
    hello
    </div>
)
}

export default AppointmentUD