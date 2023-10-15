const express = require('express');
const app = express();
const port = 9000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/leo.html');
});

// route non trovate
app.use((req, res) => {
    res.status(404).send('Route non trovata');
});


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
