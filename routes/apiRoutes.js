const saved = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        let getNotes = fs.readFileSync('./db/db.json','utf-8');
        res.json(getNotes)
        // res.json(saved);
    });
    
    // app.post('/api/notes', (req, res) => {
    //     const addNote = req.body
    //     saved.push(addNote);
    //     res.json(addNote);   
    // })

};