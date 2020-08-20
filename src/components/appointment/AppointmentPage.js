import React from 'react'
import { useSelector } from 'react-redux'  //hooks
import AppointmentCard from './AppointmentCard'

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { getAppointment, addAppointment } from '../../api'


class AppointmentPage extends React.Component {

state = {
appointments: []
}

componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/users/1/appointments`)
            .then(r => r.json())
             .then(appointments => {
                this.setState({appointments})           
            }
            )
}



render(){
    const appointments = this.state.appointments
    console.log(appointments)
return(
    <div>
    {appointments.map((appointment, index) => 
    <AppointmentCard key = {index} appointment={appointment} />
    )}
    <br></br>
    <Link to={`/`}> home </Link>
    </div>
)
}
}
export default AppointmentPage