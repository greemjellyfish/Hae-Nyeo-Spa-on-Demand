import React from 'react'
import { useSelector } from 'react-redux' 
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import SvgBlobs1 from '../svgBlobs/1.js'
import SvgBlobs3 from '../svgBlobs/3.js'
import SvgBlobs4 from '../svgBlobs/4.js'
import SvgBlobs5 from '../svgBlobs/5.js'
import SvgBlobs2 from '../svgBlobs/2.js'

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

    <div>
      <div class="blob-wrapper">
        <div class="blob">
        <SvgBlobs1></SvgBlobs1>
        <h1><Link to="/treatments">TREATMENT</Link></h1>
        </div>
        
        <div class="blob">      
        <SvgBlobs2></SvgBlobs2>
        <h1><Link to="/appointment">APPOINTMENT</Link></h1>
        </div>
        
        <div class="blob">
        <SvgBlobs3></SvgBlobs3>
        </div>
        
        <div class="blob">
        <SvgBlobs4></SvgBlobs4>
        <h1><Link to="/">H O M E</Link></h1>
        </div>
      </div>

      {/* big pink blob */}
      <div class="blob2">
      <SvgBlobs2></SvgBlobs2>
      </div>



        <div class="container">
          <div class="centered">

            <h1>

                <div className = "treatment">
                  <div className = "images">  
                    <img 
                          src={eachTreatment.image} 
                          alt={eachTreatment.name} 
                          mode='fit' 
                          />
                  </div>

                    {eachTreatment.title}<br></br>
                    ${eachTreatment.price}.00<br></br>
                    {eachTreatment.duration} mins<br></br>
                    {eachTreatment.description}<br></br>
                    <br></br>
                    <br></br> <br></br> <br></br>
                </div>

            </h1>

          </div>
        </div>

            <div class="blob">
            <SvgBlobs1></SvgBlobs1>
            <h1><Link to={`/appointment`}>book an appointment</Link></h1>
            </div>
            
            <div class="blob">      
            <SvgBlobs2></SvgBlobs2>
            </div>

    </div>

    )
}

export default Treatment