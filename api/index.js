const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app?.use(bodyParser.json())

const port = 3000

app?.get('/stats', (req, res) => res
  ?.status(200)
  ?.send({
    count_anomalies: 30,
    count_no_anomalies: 70,
    ratio: 70,
}))

app?.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app