import React from 'react'
import { useSelector } from 'react-redux'  //hooks
import TreatmentCard from './TreatmentCard'
import { getTreatments } from '../../store/treatment/selectors'


//class TreatmentList extends React.Component {
const TreatmentList = () => {
    const treatments = useSelector(getTreatments)
    console.log("TREATMENTS", treatments)

        return (
            <div>
                <TreatmentCard></TreatmentCard>
            </div>    
            )
}

export default TreatmentList