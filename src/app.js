const express = require('express')
const app = express()
app.use(express.json())
const usersRouter = require('./routes/users.routes')
const repairsRouter = require('./routes/repairs.routes')

app.use(cors())

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/repairs', repairsRouter)
