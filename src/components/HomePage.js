import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SvgBlobs1 from './svgBlobs/1.js'
import SvgBlobs3 from './svgBlobs/3.js'
import SvgBlobs4 from './svgBlobs/4.js'
import SvgBlobs5 from './svgBlobs/5.js'
import SvgBlobs2 from './svgBlobs/2.js'

const HomePage = () => {

        return (
          <div>
            <SvgBlobs1></SvgBlobs1>
            <h1><Link to="/treatments">TREATMENT</Link></h1>

            <SvgBlobs3></SvgBlobs3>

            <SvgBlobs4></SvgBlobs4>
            <h1><Link to="/">H O M E</Link></h1>

            <SvgBlobs5></SvgBlobs5>
            <h1>HAE NYEO SPA ON DEMAND <br></br><br></br> WE COME TO YOU</h1>

            <SvgBlobs2></SvgBlobs2>
          </div>
        )
}
export default HomePage