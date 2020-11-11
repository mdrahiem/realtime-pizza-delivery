const express = require('express');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

// intialize app
const app = express();
const PORT = process.env.PORT || 3000;


// assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('home');
})


// middlewares
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');


app.listen(PORT, () => console.log(`Port listening on ${PORT}`));