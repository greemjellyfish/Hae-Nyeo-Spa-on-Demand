//test.js acts like app.js in youtube tutorial
import React from 'react'
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Menu from '../Menu.js'
import Button from './Button'

const TestAppComponent = () => {

        return (
            <div>
            <Menu></Menu>

            hello world
            <Button label = "click me please"></Button>
            </div>
        )
}
export default TestAppComponent