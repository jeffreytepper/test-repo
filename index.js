const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //res.sendStatus(200);
});

const PORT = process.env.PORT || 5001;
const start = async() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

start();