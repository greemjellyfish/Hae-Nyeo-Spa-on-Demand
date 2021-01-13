import React from 'react'
import { HashRouter as  Router, Switch, Route,  Link, withRouter } from "react-router-dom"


const AppointmentCard = ({appointment, deleteAppointment}) => {

const callbackFunc = () => {
  deleteAppointment(appointment)
}

return(
<div>


          <div class="container">
          <div class="centered">


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
                    
                <Link to ={'/appointments'}> <i onClick={callbackFunc}class="trash alternate outline icon"></i></Link>

                
                </div>
                </div>
            </div>
            </div>

    </div>
    </div>
</div>
)

}
export default withRouter(AppointmentCard)