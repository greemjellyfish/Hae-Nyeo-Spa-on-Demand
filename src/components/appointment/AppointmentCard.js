import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const AppointmentCard = ({appointment}) => {

  const deleteAppointment = () => {
      console.log("Clicked")
    fetch(`http://localhost:3000/api/v1/users/1/appointments/${appointment.id}`, {
      method: "DELETE",
    })
  }

return(
<div>
    <div class="ui cards">
    <div class="card">
        <div class="content">
        <div class="header">{appointment.id}</div>
        <div class="meta">{appointment.address}</div>
        <div class="description">
            time: {appointment.time}<br></br>
            user id: {appointment.user_id} &nbsp;&nbsp;&nbsp;&nbsp;
            treatment id: {appointment.treatment_id}<br></br>

            <i 
            //onClick={updateAppointment}
            class="edit outline icon"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
           <Link to ={'/appointments'}> <i onClick={deleteAppointment}class="trash alternate outline icon"></i></Link>
        </div>
        </div>
    </div>
    </div>
</div>
)

}
export default AppointmentCard