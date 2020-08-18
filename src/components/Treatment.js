import React from 'react'
import { useSelector } from 'react-redux' 


const Treatment = (props) => {

    const [eachTreatment, setEachTreatment] = React.useState(null)

    const treatments = useSelector(state => state.treatment.treatments)

    console.log(treatments)
    
    React.useEffect(()=>{
    console.log(treatments)
// //debugger
    const id = parseInt(window.location.pathname.split('/')[2])
    console.log(id)

    const eachTreatmentID = treatments.find(eachTreat => eachTreat.id === id)
    console.log(eachTreatmentID)
 setEachTreatment(eachTreatmentID)

    }, [treatments])
 
    return (
        <div className = "treatment">
  
            <div className = "images">  
                <img src={eachTreatment.image} alt={eachTreatment.name} width={100} height={60} mode='fit' />
            </div>
            hello
            {eachTreatment.title}<br></br>
            {/* {treatment.price}.00<br></br>
            {treatment.duration}mins<br></br>
            {treatment.description}<br></br> */}
        </div>
    )
}

export default Treatment