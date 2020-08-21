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
      
<div>

    <div class="blob-wrapper">

      <div class="blob">
        <svg class="blob1" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z" fill="#FE840E"/>   </svg>
      <h1><Link to="/treatments">TREATMENT</Link></h1>
      </div>
      
      <div class="blob">      
        <svg class="blob2" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M416 239.2C456.5 303 499.5 371.5 480.6 428.2 461.7 485 380.8 530 297.8 531.3 214.8 532.5 129.7 490 93.7 423.4 57.8 356.8 71.1 266.2 113.7 201.1 156.2 136 228.1 96.5 283 106.3 337.8 116.2 375.6 175.3 416 239.2Z" fill="#FE840E"/></svg>
        <h1><Link to="/appointment">APPOINTMENT</Link></h1>
      </div>
      
      <div class="blob">
      <svg class="blob3" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M477.2 201.2C504.4 244.7 483.6 319.3 446.1 379 408.5 438.7 354.3 483.3 293.8 486.9 233.3 490.5 166.6 453 139.9 399.6 113.2 346.2 126.5 276.8 159.8 229.8 193.2 182.7 246.6 157.8 310.8 151.6 375.1 145.3 450.1 157.7 477.2 201.2Z" fill="#FE840E"/></svg>
        <h1></h1>
      </div>
      

      <div class="blob">
        <svg class="blob4" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z" fill="#FE840E"/></svg>
        <h1><Link to="/">L O G I N</Link></h1>
      </div>

    </div>






{/* big pink blob */}
<div class="blob2">
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
    <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
    </svg>
</div>

<div class="container">
<div class="centered">
  <h1>
  
  
  <div className = "treatment">
            <div className = "images">  
            
            <img 
            src={eachTreatment.image} 
            alt={eachTreatment.name} 
            // width={800} 
            // height={480} 
            mode='fit' 
            />
            </div>
            {eachTreatment.title}<br></br>
            ${eachTreatment.price}.00<br></br>
            {eachTreatment.duration} mins<br></br>
            {eachTreatment.description}<br></br>
            <br></br>
             {/* <Link to={`/appointment`}>book an appointment</Link> */}
            <br></br> <br></br> <br></br>
        </div>
  
  
   </h1>
</div>
</div>


  <div class="blob">
    <svg class="blob1" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z" fill="#FE840E"/>   </svg>
   <h1><Link to={`/appointment`}>book an appointment</Link></h1>
  </div>
  
  <div class="blob">      
<svg class="blob2" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M416 239.2C456.5 303 499.5 371.5 480.6 428.2 461.7 485 380.8 530 297.8 531.3 214.8 532.5 129.7 490 93.7 423.4 57.8 356.8 71.1 266.2 113.7 201.1 156.2 136 228.1 96.5 283 106.3 337.8 116.2 375.6 175.3 416 239.2Z" fill="#FE840E"/></svg>
    <h1></h1>
  </div>
  
  <div class="blob">
   <svg class="blob3" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M477.2 201.2C504.4 244.7 483.6 319.3 446.1 379 408.5 438.7 354.3 483.3 293.8 486.9 233.3 490.5 166.6 453 139.9 399.6 113.2 346.2 126.5 276.8 159.8 229.8 193.2 182.7 246.6 157.8 310.8 151.6 375.1 145.3 450.1 157.7 477.2 201.2Z" fill="#FE840E"/></svg>
    <div> </div>
  </div>
  

  <div class="blob">
    <svg class="blob4" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z" fill="#FE840E"/></svg>
    <h1></h1>
  </div>
  
  <div class="blob">
    <svg class="blob5"  xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><path d="M441.7 222.8C479 282.7 501.2 355.8 475.1 398.9 449 442 374.5 455 312.4 447.8 250.3 440.7 200.7 413.3 161.4 362.7 122.2 312 93.3 238 118.1 185.3 143 132.7 221.5 101.3 286.9 108.9 352.3 116.5 404.5 163 441.7 222.8Z" fill="#FE840E"/></svg>
    <h1></h1>
  </div>







        {/* <div className = "treatment">
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
        </div> */}




</div>
    )
}

export default Treatment