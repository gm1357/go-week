const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://goweek:weekgo123@ds241019.mlab.com:41019/goweek-backend',
    {
        useNewUrlParser: true
    }
);

const app = express();

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});