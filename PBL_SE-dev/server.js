
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.get('/logo.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logo.jpeg'));
});

app.get('/client1.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'public', 'client1.js'));
});

io.on('connection', (socket) => {
    console.log('Connected..');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    });
});

