const { PORT } = require('./config')
const express = require('express')

const usersRoutes = require('./routes/usersRoutes')
const eventsRoutes = require('./routes/eventsRoutes')
const eventsRegistrationRoutes = require('./routes/eventsRegistrationRoutes')

const app = express()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

app.use('/users', usersRoutes)
app.use('/events', eventsRoutes)
app.use('/events-registration', eventsRegistrationRoutes)
