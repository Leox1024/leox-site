const express = require('express');
const app = express();
const port = 7000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/resource/leo.html');
});

// route non trovate
app.use((req, res) => {
    res.status(404).send('Route non trovata');
});


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});