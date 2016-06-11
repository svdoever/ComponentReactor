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
        var componentName = req.query.component;
        var componentPath = path.resolve('./components/' + componentName);
        var component = require(componentPath);
        var data = req.body || {};
        console.log("Request for component '" + componentName + "' with data " + JSON.stringify(data));
        res.status(200).send(
            ReactDOMServer.renderToString(
                React.createElement(component, data.props)
            )
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000);  