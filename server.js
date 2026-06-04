const express = require('express');

const app = express();

app.use(express.json());

let students = [];

app.get('/', (req, res) => {
    res.send('Server Running');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    students.push(req.body);
    res.status(201).json(req.body);
});

app.listen(3000, () => {
    console.log('Server Started');
});