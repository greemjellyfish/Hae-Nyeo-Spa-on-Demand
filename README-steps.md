`npm install -g create-react-app`

`create-react-app frontend-spa`

delete logo, and test files. 

create components folder in src then create all the component files in the folder.

`yarn add node-sass`
`npm install node-sass --save`

# redux react
`npm install redux@next react-redux@next`

# `npm i redux react-redux`

# switched from youtube tutorial to Ian's lecture
bc provider bug

# still had provider bug then parsing json
solution => just copied and pasted ian's package.json and npm install and it worked. 
now i have a new bug. 
solution => changing the import location 
from`import { Provider } from 'react-redux/src'` 
to `import { Provider } from 'react-redux'` 

# Ian's part 4 react redux hooks lecture vid
everything made so much clearer sense
https://github.com/ihollander/redux-lectures


# Backend rails setup 
https://levelup.gitconnected.com/building-a-small-rails-api-with-serializers-32e3e69a078

//rails g model User name email address phone gender birthday new_client:boolean note
//rails g model Appointment address time client_id:integer treatment_id:integer
//rails g model Treatment title price:float duration:integer description image video lat:float lng:float 

(use google sheet table, the Domain Model)


# README-REDUX 
follow the step by step
for redux detail info 

# REACT-POKEMON-SEARCHER GREEM-NOTE.md
REACT FORM fetch POST from 
follow the step by step

# ROUTING
JACK: "In Ian's lecture, he adjusted two files for React Router:
In Index.js, he wrapped the entire application (<App />) in a router, from react-router-dom, which you'll have to install. Code is here: https://github.com/learn-co-students/nyc04-seng-ft-041920/blob/master/43-react-router/spawtify/src/index.js
In App.js, he had a Switch component wrap around all of the other components he was running, and then for each route (/favorites, /albums, /albums/:id), he had a new Route component, which would check for the exact path="/albums/:id , and then render the appropriate Component https://github.com/learn-co-students/nyc04-seng-ft-041920/blob/master/43-react-router/spawtify/src/components/App.js "

but I found it really difficult to follow ian's routing lecture because he used state data but I fetched data using redux, useSelector. So I suffered a bit. I struggled trying to learn redux-routing but Jack told me I can simply use reactrouting so I used this link https://reactrouter.com/web/guides/quick-start

Treatment component was fascinating

1. Treatment component had to get the data directly from the useSelector-state, not from the parent useSelector. Then used `React.useState` to update the default state, we declared as `eachTreatment` ....

2. Therefore, `treatments` treatmentPage(parent of treatment) got error because the datas were coming from different states. so created new TreatmentCard to send the iteration to each treatment.


# react router 
https://blog.logrocket.com/react-router-v6/

# bootstrap 

# pug lol for css, which I didn't use

# css 
https://freefrontend.com/css-blob-effects/

# blob menu
MORPHING BLOB by Monica Dinculescu
https://codepen.io/notwaldorf/pen/omXwzw?editors=0100

# blob menu
BLOBS, GRIDS AND VWS
Juan Pablo
https://codepen.io/jupago/pen/EMjzNK

# file-loader library
for svg.... actually got rid of it all 


<!-- 
(node_modules/react-scripts/config/webpack.config.js)
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  //...
}; -->


# jest test
https://www.youtube.com/watch?v=3e1GHCA3GP0

`npm install @testing-library/react react-test-render jest-dom --save-dev`

save it as a dev dependancy(--save-dev) because dev is not part of the functionality(project) so it goes in as a dependancy



# svg 

-created `svgBlobs` folder and files.


`npx @svgr/cli src/svgBlobs --out-dir src/svgBlobs --icon --javascript` - didn't work

`npm install @svgr/cli --save-dev` - this supposed to turn svg file into react but I already have svg in react so this is not needed.

but now it looks unordered/vertical 