const saved = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        console.log(saved)
        return res.json(saved) 
    });
    
    app.post('/api/notes', (req, res) => {
        const addNote = req.body
        saved.push(addNote);
        fs.writeFileSync(db.json, JSON.stringify(saved));
        res.json(addNote);   
    })

};