# Hae Nyeo Spa on-demand/at Home
Hae Nyeo Spa (at home/on-demand) is a full-stack web application where users can make appointments to get spa services at any location. It's like airbnb or uber for nail salon. The technician or therapist will come to the client's location for the service.

# Getting started
1. Clone the [BACKEND REPO](https://github.com/labradorescence/Hae-Nyeo-Spa-on-Demand-backend)
2. Run the rail server
3. Clone this repository and change the directory
4. Install all dependencies
  `$ npm install`
5. Run the app (simultaneously running the backend rail server)
  `$ npm start`

# Features

### Manicure
### Pedicure
### Pedi-Mani
### Massages
### Waxing
### Threading

### CRUD Operations
* C: Clients can make an appointment
* R: Clients can read treatments
* U: Clients can reschedule the appointment
* D: Clients can cancel the appointment

### Redux
* a global state management system

### React
* Update the application state using React Lifecycle methods.
* Organize 12 React components and organized the code structure by feature specific folders.
* React Routers allow user to navigate the web application efficiently. 
* Asynchronous fetches pull in treatment data from the Rails backend API.
* SVG in JSX for the image format vector graphics attributes.

### ActiveRecord Associations
* 3 models have `has_many`, `belongs_to` and `has_many through` associations.
* ActiveModelSerializers turns model attributes into JSON data.

# Tech Stack
* Redux
* React.js
* Ruby on Rails API
* PostgreSQL
* HTML/CSS
* Active Record

# Tools
* [Rack CORS](https://github.com/cyu/rack-cors)
* [ActiveModel::Serializer](https://github.com/rails-api/active_model_serializers)
* Semantc UI
* SVG CSS: Morphing Blog by Monica Dinculescu and blogs, grids and vws by Juan Pablo
