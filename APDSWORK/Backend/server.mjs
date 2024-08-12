import https from 'https';
import fs from 'fs';
import cors from 'cors';
import posts from './routes/post.mjs';
import users from './routes/user.mjs';
import express from 'express';

// Set the port
const PORT = 3000;
const app = express();

// HTTPS options
const options = {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
};

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.send('I am working.');
});

// Routes
app.use('/post', posts);
app.use('/user', users);

// Create and start HTTPS server
let server = https.createServer(options, app);
console.log(`Server is listening on port ${PORT}`);
server.listen(PORT);
