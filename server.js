const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 9001;

app.get('/', async (req, res) => {
    // connect to MongoDB database
    mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            res.send('MongoDB connected successfully');
        })
        .catch((err) => {
            res.send('MongoDB connection error', err);
        });
})

// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
