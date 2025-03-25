const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index.route');
const {engine} = require('express-handlebars');
const app = express()
const port = 8080
//
app.use(express.static(path.join(__dirname, 'resources/public')));

// morgan
app.use(morgan('combined'));

// express handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})