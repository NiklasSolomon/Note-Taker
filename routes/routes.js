const fs = require('fs');

module.exports = app => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;

        const notes = JSON.parse(data);

        app.get('/api/notes', function(req, res) {
            res.json(notes);
        });

        app.post('/api/notes', function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
        })
    });
}