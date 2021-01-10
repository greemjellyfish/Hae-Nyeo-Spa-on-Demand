import React from 'react'
import { BrowserRouter as  Router, Switch, Route, Link} from "react-router-dom";

import SvgBlobs1 from '../svgBlobs/1.js'
import SvgBlobs3 from '../svgBlobs/3.js'
import SvgBlobs4 from '../svgBlobs/4.js'
import SvgBlobs5 from '../svgBlobs/5.js'
import SvgBlobs2 from '../svgBlobs/2.js'

const TreatmentCard = ({ treatment }) => {
    //console.log(treatment)

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
              
              <div class="blob">
                <SvgBlobs5></SvgBlobs5>
              </div>

              <div class="blob">
              <SvgBlobs1></SvgBlobs1>
              </div>
              
              <div class="blob">      
              <SvgBlobs2></SvgBlobs2>
              </div>
              
              <div class="blob">
              <SvgBlobs3></SvgBlobs3>
              </div>
              

              <div class="blob">
              <SvgBlobs4></SvgBlobs4>
              </div>
              
              <div class="blob">
              <SvgBlobs5></SvgBlobs5>
              </div>
      </div>


         <div class="container">
          <div class="centered">
            <h1>
               <Link to={`/treatments/1`}> <img src={process.env.PUBLIC_URL + '/manipedi.png'}  width={400} height={400} mode='fit' alt="manipedi" />  </Link>       
              <Link to={`/treatments/1`}><h1>MANI PEDI </h1> </Link>
              
               <Link to={`/treatments/2`}> <img src={process.env.PUBLIC_URL + '/mani.png'} width={400} height={400} mode='fit' alt="mani" />  </Link>
              <Link to={`/treatments/2`}><h1>MANICURE </h1> </Link>

               <Link to={`/treatments/3`}> <img src={process.env.PUBLIC_URL + '/pedi.png'}  width={400} height={400} mode='fit' alt="pedi"  />  </Link>  
              <Link to={`/treatments/3`}><h1>PEDICURE </h1> </Link>               
            
               <Link to={`/treatments/4`}> <img src={process.env.PUBLIC_URL + '/massage.png'}  width={400} height={400} mode='fit' alt="massage"  />  </Link>
              <Link to={`/treatments/4`}><h1>MASSAGES</h1> </Link>

               <Link to={`/treatments/5`}> <img src={process.env.PUBLIC_URL + '/wax.png'}  width={400} height={400} mode='fit' alt="wax"  />  </Link>
              <Link to={`/treatments/5`}><h1>WAXING </h1> </Link>

               <Link to={`/treatments/6`}> <img src={process.env.PUBLIC_URL + '/threading.png'}  width={400} height={400} mode='fit' alt="threading" />  </Link>
              <Link to={`/treatments/6`}><h1>THREADING</h1> </Link>
               </h1>
          </div>
          </div>
        </div>
    )
}

export default TreatmentCard