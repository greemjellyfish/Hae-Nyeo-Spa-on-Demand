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
In Ian's lecture, he adjusted two files for React Router:
In Index.js, he wrapped the entire application (<App />) in a router, from react-router-dom, which you'll have to install. Code is here: https://github.com/learn-co-students/nyc04-seng-ft-041920/blob/master/43-react-router/spawtify/src/index.js
In App.js, he had a Switch component wrap around all of the other components he was running, and then for each route (/favorites, /albums, /albums/:id), he had a new Route component, which would check for the exact path="/albums/:id , and then render the appropriate Component https://github.com/learn-co-students/nyc04-seng-ft-041920/blob/master/43-react-router/spawtify/src/components/App.js









# react router 
https://blog.logrocket.com/react-router-v6/

