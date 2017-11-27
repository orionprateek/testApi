'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/test', function(req, res) {
    var speech
      , intent = req.body.result && req.body.result.metadata.intentName ? req.body.result.metadata.intentName : "noIntent";
    if(intent === 'checkWebhookUrl'){
        speech = "This is Webhook URL test." 
    }
    else{
        speech = "No intent Found!"
    }
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-test-sample'
    });
});

app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
