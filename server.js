const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// some data for the API
var products = [
  { "id": 1, "description": "Bitcoin" },
  { "id": 2, "description": "Ether" },
  { "id": 3, "description": "ADA" },
  { "id": 4, "description": "IOTA" },
  { "id": 5, "description": "NEO" }
];

var books = [
  { "title": "Hitchhiker's Guide to the Galaxy" },
  { "title": "The Fellowship of the Ring" },
  { "title": "Moby Dick" }
];

var movies = [
  { "title": "Ghostbusters" },
  { "title": "Star Wars" },
  { "title": "Batman Begins" }
];

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'))
});

// the GET "books" API endpoint
app.get('/api/books', function (req, res) {
    res.send(books);
});

// the GET "movies" API endpoint
app.get('/api/movies', function (req, res) {
    res.send(movies);
});

// the GET "products" API endpoint
app.get('/api/products', function (req, res) {
    console.log("GET products");

    // This is a very simple API endpoint. It returns the current value of the "foods" array.
    res.send(products);

});

// POST endpoint for creating a new food
app.post('/api/product', function (req, res) {
    // NOTE: This is a sample app to show the Angular Http client functionality.
    // This API endpoint keeps the submitted data in memory. It does not save to a database.

    // This example uses Express because it is easy to install and run.
    // You could write a different back-end app in PHP, Python, Ruby, .NET, etc.

    console.log("POST product: " + req.body.name);

    // calculate the next ID
    let id = 1;
    if (products.length > 0) {
        let maximum = Math.max.apply(Math, products.map(function (f) { return f.id; }));
        id = maximum + 1;
    }

    // build the new product object
    let new_product = {"id": id, "name": req.body.name};

    // "save" the data by adding it to the "products" array in memory
    products.push(new_product);

    // In the real world, you would put code here to save the data to a
    // database or another type of storage.

    // When we're done, it's nice to return the newly created object to the caller.
    res.send(new_product);

});

// PUT endpoint for editing product
app.put('/api/product/:id', function (req, res) {

    console.log("PUT product: " + req.params.id);

    // read the ID from the query string
    let id = req.params.id;

    // find the requested food in the array
    let f = products.find(x => x.id == id);

    // write the new name to the data storage
    f.name = req.body.name;

    // send a copy of the modified object back to the caller
    res.send(f);

});

// DELETE endpoint for deleting food
app.delete('/api/product/:id', function (req, res) {

    console.log("DELETE product: " + req.params.id);

    // read the ID from the query string
    // (DELETE requests don't have a body)
    let id = req.params.id;

    // read the object from the data (so we have it later)
    let f = foods.find(x => x.id == id);

    // remove it from the data
    products = foods.filter(x => x.id != id);

    // send back the object we deleted, in case the caller wants to look at what was there
    res.send(f);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// HTTP listener
app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;
