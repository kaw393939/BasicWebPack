'use strict';
const express = require('express');
const app = express();
const open = require("open");

app.use(express.static('docs'));
open("http://localhost:9080");


app.get('/api/v1/cities', function(req, res) {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '32000',
        user: 'root',
        password: 'root',
        database: 'citiesData'
    });
    connection.connect();

    connection.query('SELECT * FROM tblCitiesImport', function (err, rows, fields) {
        if (err) throw err;
        res.json({ "data": rows});
    })

    connection.end()


});

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
});