'use strict';

require('babel/register');
var ReactDOMServer = require('react-dom/server');  
var React = require('react');  
var express = require('express');  
var path = require('path');  
var bodyParser = require('body-parser');

var app = express();  
app.use(bodyParser.json());  
app.use('/', function(req, res) {  
    try {
        var view = path.resolve('./components/' + req.query.component);
        var component = require(view);
        var props = req.body || null;
        console.log(props);
        res.status(200).send(
            ReactDOMServer.renderToString(
                React.createElement(component, props)
            )
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000);  