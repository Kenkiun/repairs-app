const express = require('express')
const app = express()
const cors = require('cors')

const usersRouter = require('./routes/users.routes')
const repairsRouter = require('./routes/repairs.routes')

app.use(express.json())

app.use(cors())

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/repairs', repairsRouter)

module.exports = app
