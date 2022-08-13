const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api', require('./routes/demoRoute'));

app.get('/check', (req, res) => {
    res.send('We are working on express');
} );

const con = require('./dbConfig')

if(con) {
    app.listen(3000, () => {
        console.log('server is running');
    });
} else {
    console.log('having some isue with database...')
}

