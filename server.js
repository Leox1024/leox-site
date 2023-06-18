const express = require('express');
const app = express();
const port = 3001;


app.get('/leo', (req, res) => {
    res.sendFile(__dirname + '/resource/leo.html');
});

// route non trovate
app.use((req, res) => {
    res.status(404).send('Route non trovata');
});


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});