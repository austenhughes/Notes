const saved = require('../db/db.json');
const fs = require('fs');
const uuid = require('uuidv4');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        console.log(saved)
        return res.json(saved) 
    });
    
    app.post('/api/notes', (req, res) => {

        let addNote = req.body
        let idNumber = (saved.length)
        addNote.id = idNumber
        // addNote.id = uuidv4();
        saved.push(addNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(saved));
        res.json(addNote); 
        // console.log(saved)  

    })

};