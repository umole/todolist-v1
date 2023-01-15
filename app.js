const express = require('express');
const bodyParser = require('body-parser');
const date = require('./date');

const app = express();
let items = [];

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    
    let day = date();
    res.render("list", {kindOfDay: day, items: items});
});

app.post('/', (req, res) => {
    const item = req.body.todolist; 
    items.push(item);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Server is listening on PORT: 3000");
});  