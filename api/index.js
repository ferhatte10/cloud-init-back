const cors = require('cors')
const express = require('express')
const app = express()
const dotenv = require("dotenv")
var dotenvExpand = require('dotenv-expand')
dotenvExpand.expand(dotenv.config())

const port = process.env.PORT || 3000
const morgan = require('morgan')

const {sequelize} = require("./model/models.js")


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('combined'))

sequelize.sync().then(() => {
    console.log("Database is synced")
}).catch((err) => {
    console.log(err)
})


app.use("/api/task", require("./routes/task.js"))

app.use(`*`, function(req, res) {
  res.status(404).send(`404 not found`)
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})