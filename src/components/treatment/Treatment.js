import React from 'react'
import { useSelector } from 'react-redux' 
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Treatment = (props) => {
    const [eachTreatment, setEachTreatment] = React.useState({})
    const treatments = useSelector(state => state.treatment.treatments)

    console.log(treatments)
    console.log(eachTreatment)

    React.useEffect(() => {
      if (treatments.length){ //if treatments is not an empty array(default state), then get the path, and get the id. 
        console.log(treatments)
        // //debugger
        const id = parseInt(window.location.pathname.split('/')[2])
        console.log(id)
        const eachTreatmentID = treatments.find(eachTreat => eachTreat.id === id)
        console.log(eachTreatmentID)
        setEachTreatment(eachTreatmentID)
      }
    }, [treatments])

 
    return (
        <div className = "treatment">
            <div className = "images">  
            <img src={eachTreatment.image} alt={eachTreatment.name} width={800} height={480} mode='fit' />
            </div>
           {eachTreatment.title}<br></br>
            ${eachTreatment.price}.00<br></br>
            {eachTreatment.duration} mins<br></br>
            {eachTreatment.description}<br></br>
            <br></br>
             <Link to={`/appointment`}>book an appointment</Link>
            <br></br> <br></br> <br></br>
            <img src={eachTreatment.video} width={200} />
        </div>
    )
}

export default Treatment