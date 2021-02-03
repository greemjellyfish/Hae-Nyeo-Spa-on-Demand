import React from 'react';
import ReactDOM from 'react-dom' //L17
import Button from '../Button.js'

import {render, cleanup } from '@testing-library/react'; //render function in line 21 
//cleanup: after each render, it cleans up, before it renders again.

import "@testing-library/jest-dom/extend-expect";//expect on L20

import renderer from "react-test-renderer" //on L30



afterEach(cleanup)
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label = "click me please"></Button>) //uses render function from @testing-library/react
    expect(getByTestId("button")).toHaveTextContent("click me please")//we are expecting `button` tag to have text content, "click me please" because that's how we rendered it.
})

//14:46 what if we pass different prop
//change the prop "click me please" prop to "save" prop. It will fail and say "Found multiple elements by [data-testid="button"]."  This render is running at the same time with the first test. So inorder to prevent that, after every single test, we will clean up. 
it("renders button correctly", () => {
    const {getByTestId} = render(<Button label = "save"></Button>)
    expect(getByTestId("button")).toHaveTextContent("save")
})

it("it matches snapshot 1", () => {
    const tree = renderer.create(<Button label = "save"></Button>).toJSON(); //use the renderer function from line 8, create snapshop, once button is created, we will convert into json. Then save it in the object called 'treet'
    expect(tree).toMatchSnapshot(); //When this line is run, the tree object gets created in the snapshot if there wasn't one. If there was one, it matches the snapshot in the snapshot file. This is useful bc it will track and if there's any changes in the button.js file, it will fail bc it's different from the original button.js, which was snapshotted in the snapshot.
})

it("it matches snapshot 2", () => {
    const tree = renderer.create(<Button label = "click me please"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})