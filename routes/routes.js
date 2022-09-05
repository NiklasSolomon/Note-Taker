const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid');
const express = require('express');
const router = express.Router();

// Get and Post routes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid()
    };
    
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
  });

// Delete route
router.delete('/api/notes/:id', (req, res) => {
    
    let db = JSON.parse(fs.readFileSync('db/db.json'))

    let deleteNotes = db.filter(item => item.id !== req.params.id);
    
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
});

// View the routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;