const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send({
      "status": "CAPTURE_SUCCESSFUL"
      })
})

app.post('/', (req, res) => {
  res.send({
    "status": "CAPTURE_SUCCESSFUL"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
