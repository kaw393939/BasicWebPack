const express = require('express');
const open = require('open');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('docs'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
// Require employee routes
const citiesRoutes = require('./routes/cities.routes');
// using as middleware
app.use('/api/v1/cities', citiesRoutes);
app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');
app.listen(app.get('port'), () => {
  console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
  open('http://localhost:8000');
});
