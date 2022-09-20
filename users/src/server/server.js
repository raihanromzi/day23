const express = require('express')
const app = express()
const port = 8000
const users = require('./routes')

app.use(users)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

module.exports = app