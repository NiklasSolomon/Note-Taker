const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    
    // Get and Post routes
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
    
        let newNote = {
          title: req.body.title,
          text: req.body.text,
        };
        
        db.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
      });

    // Delete route
    app.delete('/api/notes/:id', (req, res) => {

        let db = JSON.parse(fs.readFileSync('db/db.json'))

        let deleteNotes = db.filter(item => item.id !== req.params.id);
        
        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
            res.json(deleteNotes);
    });
  
    // View the routes
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};