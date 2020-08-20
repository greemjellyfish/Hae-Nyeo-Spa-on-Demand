// import React from 'react'
// // import { render } from 'react-dom'
// import LocationForm from './LocationForm.js'
// import PaymentForm from './PaymentForm.js'
// import TimeForm from './TimeForm.js'

// import { useSelector } from 'react-redux' //reading state react-redux HOOKS step1

// const AppointmentForm = () => {
// //console.log(props.appointment)

//     const appointment = useSelector(state => state.appointment.appointment)  //reading state react-redux hHOOKS step2
//     //write a selector function to return whatever piece of state is important to your component
//     //console.log("appointmentForm HOOKS appointment", appointment )

//     return (
//             <div>
//               {/* reading state react-redux HOOKS step3*/}
//               <h5> appointment from api </h5>
//               {appointment.address}
//               {appointment.time}
//               {appointment.payment}     

//             {appointment.map((eachAppointment, index) => 
//             <LocationForm key={index} eachAppointment={eachAppointment} />
//             )}
//             <TimeForm />
//             <PaymentForm />
//             </div>
//     )
// }

// export default AppointmentForm









import React from 'react'
import { render } from 'react-dom'
//import LocationForm from './LocationForm.js'
//import PaymentForm from './PaymentForm.js'
//import TimeForm from './TimeForm.js'
import { Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

class AppointmentForm extends React.Component {
  //Form step 1
  state = {
       address:"",
       time: "",
       payment: "",
       user_id:1,
       treatment_id:1 
  } //Form step 5-4


  //Form step 4
  handleInputChange = e => {
      //debugger
    console.log(e.target.value, e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
}

// ////Form step 5 POST FETCH
  handleSubmit = () => {
   console.log("submitting form...") 
    //form step 5-3
    const bodyData = {
      "address": this.state.address,
      "time": this.state.time,
      "payment": this.state.payment,
      "user_id": 1,
      "treatment_id": 1 
    }
    console.log("BODYDATA", bodyData)

//componentDidMount(){ //only runs when component mounted, when it's displayed on the screen. so don't use it now. 
fetch("http://localhost:3000/api/v1/users/1/appointments",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  })
    .then(r => r.json())
    .then(newAppointment => {
        console.log(newAppointment)
        //this.props.addAppointment(newAppointment)
    })
//}
}



  render() {
    console.log(this.state)
    return ( //form step 3 add values as attributes
      ///form step 5-6 add onSubmit attribute prop to Form
      //step 2
      <div>
        <br></br><br></br>
        <h3>Add an Appointment!</h3>
        <Form onSubmit={this.handleSubmit}>
        {/* <Form onSubmit={() => console.log("hi hi")} > */}
          <Form.Group widths="equal">

            <Form.Input fluid 
            label="address" 
            placeholder="address" 
            name="address" 
            value={this.state.address} 
            onChange={this.handleInputChange}
            />

            <Form.Input fluid label="time" 
            placeholder="time" 
            name="time" 
            value={this.state.time} 
            onChange={this.handleInputChange}
            />

            {/* <Form.Input fluid label="payment" 
            placeholder="payment" 
            name="payment" 
            value={this.state.payment} 
            onChange={this.handleInputChange}
            /> */}

            {/* <Form.Input fluid label="user_id" 
            placeholder="user_id" 
            name="user_id" 
            value={this.state.user_id} 
            onChange={this.handleInputChange}
            />

            <Form.Input fluid label="treatment_id" 
            placeholder="treatment_id" 
            name="treatment_id" 
            value={this.state.treatment_id} 
            onChange={this.handleInputChange}
            /> */}

          </Form.Group>
         {/* <Link to ={`/bookingconfirm`}></Link> */}
         
         <Form.Button>Submit</Form.Button>

 <Link to ={`/bookingconfirm`}> confirmation </Link>

        </Form>
               
      </div>
    )
  }
}

export default AppointmentForm