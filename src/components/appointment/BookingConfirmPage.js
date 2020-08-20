import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const BookingConfirmPage = () => {

    return (
        <div>
        Thank you for booking <br></br><br></br><br></br>
        <Link to={`/treatments/`}> back to treatment </Link><br></br><br></br>
        <Link to={`/appointments`}> look at the appointments </Link>
        </div>
    )
}

export default BookingConfirmPage