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

import SvgBlobs1 from '../svgBlobs/1.js'
import SvgBlobs3 from '../svgBlobs/3.js'
import SvgBlobs4 from '../svgBlobs/4.js'
import SvgBlobs5 from '../svgBlobs/5.js'
import SvgBlobs2 from '../svgBlobs/2.js'

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


fetch("https://haenyeospa.herokuapp.com/api/v1/users/1/appointments",{
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
        <SvgBlobs1></SvgBlobs1>
       <h1><Link to="/treatments">TREATMENT</Link></h1>
        </div>
      
        <div class="blob">      
        <SvgBlobs2></SvgBlobs2>
              <h1><Link to="/appointment">APPOINTMENT</Link></h1>
        </div>
      
        <div class="blob">
        <SvgBlobs3></SvgBlobs3>
        <div></div>
       </div>
  

        <div class="blob">
        <SvgBlobs4></SvgBlobs4>
          <h1><Link to="/">H O M E</Link></h1>
        </div>
        
        <div class="blob">
        <SvgBlobs5></SvgBlobs5>
          <h1>  </h1>
        </div>

      </div>



  
          <div class="container">
          <div class="centered">
            <h1>
               </h1>
          </div>
          </div>
  



          <div class="container">
          <div class="centered">
            <h1>


            <form class="ui form">
              <h4 class="ui dividing header">Personal Information</h4>
              <div class="two fields">
                <div class="field">
                  <label>Name</label>
                  <div class="two fields">
                    <div class="field">
                      <input type="text" name="first-name" placeholder="First Name"/>
                    </div>
                    <div class="field">
                      <input type="text" name="last-name" placeholder="Last Name"/>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label>Gender</label>
                  <div class="ui selection dropdown">
                    <input type="hidden" name="gender"/>
                    <div class="default text">Gender</div>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                      <div class="item" data-value="male">Male</div>
                      <div class="item" data-value="female">Female</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="two fields">
                <div class="field">
                  <label>State</label>
                  <select class="ui search dropdown">
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div class="field"></div>
              </div>
              <div class="field">
                <label>Biography</label>
                <textarea></textarea>
              </div>
              <h4 class="ui dividing header">Account Info</h4>
              <div class="two fields">
                <div class="required field">
                  <label>Username</label>
                  <div class="ui icon input">
                    <input type="text" placeholder="Username"/>
                    <i class="user icon"></i>
                  </div>
                </div>
                <div class="required field">
                  <label>Password</label>
                  <div class="ui icon input">
                    <input type="password"/>
                    <i class="lock icon"></i>
                  </div>
                </div>
              </div>
              <h4 class="ui top attached header">Import Settings</h4>
              <div class="ui bottom attached segment">
                <div class="grouped fields">
                  <label for="alone">Would you like us to import your current settings?</label>
                  <div class="field">
                    <div class="ui radio checkbox checked">
                      <input type="radio" checked="" name="import"/>
                      <label>Yes</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="import"/>
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>
              <h4 class="ui dividing header">Settings</h4>
              <h5 class="ui header">Privacy</h5>
              <div class="field">
                <div class="ui toggle checkbox">
                  <input type="radio" name="privacy"/>
                  <label>Allow <b>anyone</b> to see my account</label>
                </div>
              </div>
              <div class="field">
                <div class="ui toggle checkbox">
                  <input type="radio" name="privacy"/>
                  <label>Allow <b>only friends</b> to see my account</label>
                </div>
              </div>
              <h5 class="ui header">Newsletter Subscriptions</h5>
              <div class="field">
                <div class="ui slider checkbox">
                  <input type="checkbox" name="top-posts"/>
                  <label>Top Posts This Week</label>
                </div>
              </div>
              <div class="field">
                <div class="ui slider checkbox">
                  <input type="checkbox" name="hot-deals"/>
                  <label>Hot Deals</label>
                </div>
              </div>
              <div class="ui hidden divider"></div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" name="hot-deals"/>
               
                </div>
              </div>
              <div class="ui error message">
                <div class="header">We noticed some issues</div>
              </div>
              {/* <div class="ui submit button">Register</div> */}
            </form>
       
             </h1>
          </div>
          </div>



          <div class="container">
          <div class="centered">
            <h1>
            <h3>Book an Appointment!</h3>
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
             </h1>
          </div>
          </div>

          <div class="blob">
          <SvgBlobs4></SvgBlobs4>
            <h1> <Link to ={`/`}> h o m e </Link>   </h1>
          </div>
          
          <div class="blob">
          <SvgBlobs5></SvgBlobs5>
            <h1> </h1>
          </div>
      </div>
    )
  }
}

export default withRouter(AppointmentForm)