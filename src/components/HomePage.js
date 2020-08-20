import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Card, Button, Icon } from 'semantic-ui-react'

const HomePage = () => {

        return (
            <div>
        
            
 <img src="https://media1.tenor.com/images/05acabfd0249e1ae10f5e1e7a81cb946/tenor.gif" width={750} />


              <br></br> <br></br> <br></br>
            
      <Link to="/treatments"><button class="ui orange basic button">treatments</button></Link>
              {/* <Link to="/treatments">treatments</Link> */}
          
          
              <Link to="/appointment"><button class="ui orange basic button">appointment</button></Link>
        
            </div>
            )
}
export default HomePage