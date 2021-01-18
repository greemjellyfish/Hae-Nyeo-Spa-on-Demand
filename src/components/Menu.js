import React from 'react'
import { HashRouter as outer, Switch, Route, Link} from "react-router-dom";
import SvgBlobs1 from './svgBlobs/1.js'
import SvgBlobs3 from './svgBlobs/3.js'
import SvgBlobs4 from './svgBlobs/4.js'
import SvgBlobs5 from './svgBlobs/5.js'
import SvgBlobs2 from './svgBlobs/2.js'

const Menu = () => {

        return (
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

            <SvgBlobs5></SvgBlobs5>
            <h1>HAE NYEO SPA ON DEMAND <br></br><br></br> WE COME TO YOU</h1>

            <SvgBlobs2></SvgBlobs2>

          </div>
        )
}
export default Menu