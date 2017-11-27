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
      , messages = new Array()
      , intent = req.body.result && req.body.result.metadata.intentName ? req.body.result.metadata.intentName : "noIntent";
    if(intent === 'checkWebhookUrl'){
        speech = "This is Webhook URL test." 
        var tempOb = {
                          "type": "link_out_chip",
                          "platform": "google",
                          "destinationName": "Video",
                          "url": "https://www.youtube.com/watch?v=1rMm0qaa2Hs"
                     }
        messages.push(tempOb);
    }
    else{
        speech = "No intent Found!"
    }
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-test-sample'
        messages: messages
    });
});

app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
