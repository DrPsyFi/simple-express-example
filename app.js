// 1. require express
const express = require('express')

// 2. create express application
const app = express()

const dogNames = [{id: 1, name: 'Tiberius'}, {id:2, name:'Concrete'}]

// 4. create route handlers

// Read All
app.get('/dognames', (req, res) => {
  res.send(dogNames)
})

// Read One
app.get('/dognames/:id', (req, res) => {
  const dogName = dogNames.find(dog => dog.id === parseInt(req.params.id))

  if(dogName){
    res.send(dogName)
  }
  else{
    res.sendStatus(404)
  }
})


// Default Route
app.use((req,res) => {
  res.send(404)
})

// 3. start application
app.listen(8000, () => {
  console.log('started listening on port 8000')
})
