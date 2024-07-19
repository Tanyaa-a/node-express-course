console.log('Task Manager App')
const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

// Middleware
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start the server
const PORT = 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server is running on port ${PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()