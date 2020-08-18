import React from 'react'
import { useSelector } from 'react-redux'  //hooks
import Treatment from './Treatment'
import { getTreatments } from '../store/treatment/selectors'

//class TreatmentList extends React.Component {
const TreatmentList = () => {
    const treatments = useSelector(getTreatments)
    //console.log("TREATMENTS", treatments)

        return (
            <div>
                {treatments.map((treatment, index) =>  
                <Treatment key ={index} treatment={treatment} />
                )}
                </div>
            )
}

export default TreatmentList