const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 7250;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello ! '});
});

app.listen(port, () => console.log(`listen port ${port}`));