// Node.js-based Web server

const express = require('express');
const path = require('path');
const fs = require('fs');

var server = function() {
  var self = this;

  self.port = '8080';

  self.createRoutes = function() {
    self.routes ={};

    // req = request, res = response
    self.routes['/'] = function(req, res) {
      res.setHeader('Content-Type', 'text/html');
      res.send(fs.readFileSync('./views/index.html'));
    };
  };

  self.initializeServer = function() {
    self.createRoutes();
    self.app = express(); // Express core constructor
    self.app.use(express.static('public'));
    self.app.set('view engine', 'ejs');

    // Add handlers for the app (from the routes).
    for (var r in self.routes) {
      self.app.get(r, self.routes[r]);
    }
  };

  self.start = function() {
    // Start the app on the specific interface (and port).
    self.app.listen(self.port, function() {
      console.log('%s: Node server started on port %d ...',
        Date(Date.now()), self.port);
    });
  };
}; // End of server function

var app = new server();
app.initializeServer();
app.start();
