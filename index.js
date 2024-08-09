const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

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
    console.log(req.body)
    if(req.body.payment_status == 'SUCCESS'){
        res.send({
            "status": "CAPTURE_SUCCESSFUL"
        });
    } 
    else{
        res.send({
            "status": "CAPTURE_FAILURE"
        });
    }
});

app.post('masspayment',(req,res) => {
  res.send({
      data: null,
      succeeded: false,
      error: {
        message: "You don't have a sufficient balance in your account to complete this transaction.",
        code: 105,
        externalCode: null
      }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
