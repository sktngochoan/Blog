import Express from 'express';
import Morgan from 'morgan';
import { fileURLToPath } from 'url';
import path from 'path';
import {engine} from 'express-handlebars';
const app = Express()
const port = 8080

// get current path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//
app.use(Express.static(path.join(__dirname, 'resources/public')));

// morgan
app.use(Morgan('combined'));

// express handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})