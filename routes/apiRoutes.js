const saved = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(saved)); 
    
    app.post('/api/notes', (req, res) => {
        const addNote = req.body
        saved.push(addNote);
        res.json(addNote);   
    })

};