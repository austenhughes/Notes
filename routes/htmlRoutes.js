const express = require('express');
const app = express();
const path = require('path');

module.exports = (app) => {
    
      // app.use(express.static('public'));
    
      app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });

      // app.use('/static',express.static(path.join(__dirname, 'public')));
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });
      
    };