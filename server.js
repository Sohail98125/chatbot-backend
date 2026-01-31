const express = require('express')
const chatbot = require('./controller/conroller')
const cors =require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/search',chatbot)
app.get('/',(req,res)=>{
  res.send("Backend API is running 🚀")
})
app.listen(port, () => {
  console.log(` App listening on port${port}`)
})