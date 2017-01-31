import express from 'express';
import bodyParser from 'body-parser';

export let app = express();


// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

app.set('json spaces', 2);

