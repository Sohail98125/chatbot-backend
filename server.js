const express = require('express')
const chatbot = require('./controller/conroller')
const cors =require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = 3000
app.use(cors())

app.get('/search',chatbot)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
