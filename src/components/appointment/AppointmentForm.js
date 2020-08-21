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
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom"

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
    this.props.history.push("/bookingconfirm")

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



   <div class="blob-wrapper">
  
  <div class="blob">
    <svg class="blob1" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z" fill="#FE840E"/>   </svg>
   <h1></h1>
  </div>
  
  <div class="blob">      
<svg class="blob2" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M416 239.2C456.5 303 499.5 371.5 480.6 428.2 461.7 485 380.8 530 297.8 531.3 214.8 532.5 129.7 490 93.7 423.4 57.8 356.8 71.1 266.2 113.7 201.1 156.2 136 228.1 96.5 283 106.3 337.8 116.2 375.6 175.3 416 239.2Z" fill="#FE840E"/></svg>
    <h1> </h1>
  </div>
  
  <div class="blob">
   <svg class="blob3" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M477.2 201.2C504.4 244.7 483.6 319.3 446.1 379 408.5 438.7 354.3 483.3 293.8 486.9 233.3 490.5 166.6 453 139.9 399.6 113.2 346.2 126.5 276.8 159.8 229.8 193.2 182.7 246.6 157.8 310.8 151.6 375.1 145.3 450.1 157.7 477.2 201.2Z" fill="#FE840E"/></svg>
    <div>
     3
     </div>
  </div>
  

  <div class="blob">
    <svg class="blob4" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z" fill="#FE840E"/></svg>
    <h1>   </h1>
  </div>
  
  <div class="blob">
    <svg class="blob5"  xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M441.7 222.8C479 282.7 501.2 355.8 475.1 398.9 449 442 374.5 455 312.4 447.8 250.3 440.7 200.7 413.3 161.4 362.7 122.2 312 93.3 238 118.1 185.3 143 132.7 221.5 101.3 286.9 108.9 352.3 116.5 404.5 163 441.7 222.8Z" fill="#FE840E"/></svg>
    <h1>  </h1>
  </div>
  </div>




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
<br></br>
            <Form.Input fluid label="date/time" 
            placeholder="time" 
            name="time" 
            value={this.state.time} 
            onChange={this.handleInputChange}
            />

          </Form.Group>
         {/* <Link to ={`/bookingconfirm`}></Link> */}
         
         <Form.Button>Submit</Form.Button>



        </Form>






  <div class="blob">
    <svg class="blob4" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z" fill="#FE840E"/></svg>
    <h1> <Link to ={`/`}> h o m e </Link>   </h1>
  </div>
  
  <div class="blob">
    <svg class="blob5"  xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M441.7 222.8C479 282.7 501.2 355.8 475.1 398.9 449 442 374.5 455 312.4 447.8 250.3 440.7 200.7 413.3 161.4 362.7 122.2 312 93.3 238 118.1 185.3 143 132.7 221.5 101.3 286.9 108.9 352.3 116.5 404.5 163 441.7 222.8Z" fill="#FE840E"/></svg>
    <h1> </h1>
  </div>


      </div>
    )
  }
}

export default withRouter(AppointmentForm)