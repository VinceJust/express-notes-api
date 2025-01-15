const express = require('express');
const app = express();
const port = 8080;


app.use(express.json());

let notes = [
    { id: 1, title: 'Note 1', content: 'Content 1' },
    { id: 2, title: 'Note 2', content: 'Content 2' },
];
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

app.get('/notes', (req, res) => {
    res.send('Welcome to Express Notes API');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.get('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const note = notes.find(n => n.id === id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

app.post('/notes', (req, res) => {
    const { note, autor, date } = req.body;

    if (note && autor && date) {
        const newNote = { id: notes.length + 1, note, autor, date };
        notes.push(newNote);
        res.status(201).json(newNote);
    } else {
        res.status(400).json({ error: 'Invalid data format' });
    }
});

