const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const responseTime = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${responseTime}ms`);
  });
  next();
});

app.get('/', (req, res) => {
  res.send({
    "status": "CAPTURE_SUCCESSFUL"
  });
});

app.post('/', (req, res) => {
  res.send({
    "status": "CAPTURE_SUCCESSFUL"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
