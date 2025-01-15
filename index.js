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