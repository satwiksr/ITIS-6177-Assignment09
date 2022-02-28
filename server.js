var express = require('express');
var app = express();
var port = 3000;
const axios = require('axios');

app.get("/say", async (req, res) => {
    try {
        if (req.query.keyword.length === 0) {
            return res.status(400).json({ Message: 'Bad Request, Enter the keyword' });
        }
    var parameter = req.query.keyword;
    var message =  await axios.get('https://rmoaobehf5.execute-api.us-east-1.amazonaws.com/test/say?keyword=' + parameter );
   // console.log('https://rmoaobehf5.execute-api.us-east-1.amazonaws.com/test/say?keyword=' + parameter);
    //console.log(message.data);
    res.send(message.data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

app.get("/", (req,res) => {
  res.send('Hi, append /say?keyword=value for invoking the lambda function');
});

app.listen(port, () => {
    console.log(` Express app listening at http://localhost:${port}`)
    });
