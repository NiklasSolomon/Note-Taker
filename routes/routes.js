const fs = require('fs');

module.exports = app => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;

        const notes = JSON.parse(data);
        // Get and Post routes
        app.get('/api/notes', function(req, res) {
            res.json(notes);
        });

        app.post('/api/notes', function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
        });

        function updateDb() {
            fs.writeFile('db/db.json', JSON.stringify(notes), err => {
                if (err) throw err;
                return true;
            });
        }
    });
}