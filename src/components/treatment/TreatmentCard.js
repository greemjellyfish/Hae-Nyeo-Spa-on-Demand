import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const TreatmentCard = ({ treatment }) => {
    //console.log(treatment)

    return (
        <div className = "treatment">
            <div className = "images">  
            <Link to={`/treatments/${treatment.id}`}>  
            <img src={treatment.image} alt={treatment.name} width={200} height={120} mode='fit' /> </Link>
            </div>
            <Link to={`/treatments/${treatment.id}`}> {treatment.title} </Link>
            <br></br>
            <br></br>
        </div>
    )
}

export default TreatmentCard