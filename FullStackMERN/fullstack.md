# Node + Express - Week 4 Day 2

- Office Hours: 4:00 PM PST
- Lecture: 5:00 PM PST

## Office Hours

- Relationships in Mongodb using Mongoose

## Lecture

### Assignments

- Product Manager part 1,2,3

### Objectives

- create a full stack MERN application
- establish a checklist for building the application
- have a starting template made for your exam

### Start

    - Create project folder
    - create server folder
    - run npx create-react-app client

### Server

    - npm init -y
    - npm i mongoose express cors
    - make folders config, models, controllers, routes
    - make server.js file

### Backend modularization

    - mongoose.config.js -> establish connection to mongodb
    - models -> Make your schemas for your models
    - controllers -> Contains logic for interacting with your database
    - routes -> Contains the routes that link with the methods in the controller

### server.js

    - bring in express with require
    - bring in cors with require
    - app.use(express.json()), app.use(express.urlencoded({extended:true})) -> Allows for post requests
    - app.use(cors()) -> allows for hosts on two different servers to communicate across the net. 
    - require your routes and your config
    - app.listen()

### Client

    - npm i axios react-router-dom
    - set up your App.js with BrowserRouter -> Routes -> Route

### Create

    - useState() handles formData
    - onSubmit will use axios to call to the create route on our backend and pass our formData object as the body
    - reset the values on the form

### Read

    - Component should use useEffect and axios to call to the findAll route on our express server
    - once the data is retrieved, use map to display the info for each object in our db

### Update

    - make sure you are passing the id either through the body or as a parameter in the url
    - findByIdAndUpdate works best and requires the least amount of code
    - axios.put

### Delete

    - All thats needed is the id. 
    - Backend will not respond with anything but a success message
    - axios.delete
    - remember to filter on the frontend. The data wont reflect the database until it fetches again
