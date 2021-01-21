import React from 'react'
import { useSelector } from 'react-redux'  //hooks
import AppointmentCard from './AppointmentCard'
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom"
import { getAppointment, addAppointment } from '../../api'
import Menu from '../Menu.js'

class AppointmentPage extends React.Component {

    state = {
    appointments: []
    }

    componentDidMount = () => {
        fetch(`https://haenyeospa.herokuapp.com/api/v1/users/1/appointments`)
                .then(r => r.json())
                .then(appointments => {
                  this.setState({appointments})           
                }
                )
    }




    //*****************************************
    //*************** DELETE *************** /
    //*****************************************
    removeAppointment = id => {
        console.log(id)
        const updatedAppointments = this.state.appointments.filter(appointment => {
          //if (parseInt(appointment.id) !== parseInt(id)) {
          if (appointment.id !== id) {
            return true
          } else {
            return false
          }
        })
        this.setState({
          appointments: updatedAppointments
        })
      }

    deleteAppointment = (appointment) => {
        console.log("Clicked")
        fetch(`https://haenyeospa.herokuapp.com/api/v1/users/1/appointments/${appointment.id}`, {
          method: "DELETE",
        })
      //console.log(appointment.id)

        this.removeAppointment(appointment.id)  
    }
    //*****************************************
    //*************** end of DELETE method *************** /
    //*****************************************


    render(){
        const appointments = this.state.appointments
        console.log(appointments)

        return(
            <div>
              <Menu></Menu>
              <div class="container">
                <div class="centered">
                  {appointments.map((appointment, index) => 
                      <AppointmentCard key = {index} appointment={appointment} deleteAppointment={this.deleteAppointment} />
                      )
                  }
                    <br></br>
              </div>
              </div>
            </div>
        )
    }
}
export default AppointmentPage