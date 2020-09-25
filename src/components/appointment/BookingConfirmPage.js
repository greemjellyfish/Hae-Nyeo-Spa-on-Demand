import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const BookingConfirmPage = () => {

    return (
        <div>
         <div class="container">
          <div class="centered">
            <h1>
               Thank you. <br></br><br></br>
               Your booking was successful. We look forward to seeing you. <br></br><br></br><br></br>
                <Link to={`/treatments/`}> BACK TO TREATMENTS </Link><br></br><br></br>
                 <Link to={`/appointments`}> Reschedule or cancel your appointments </Link>
               </h1>
          </div>
          </div>
        </div>
    )
}

export default BookingConfirmPage