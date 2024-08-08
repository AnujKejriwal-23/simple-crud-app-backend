const express = require('express')
const app = express()
const mongoose = require('mongoose');
const userModel = require('./models/product.model.js')
const productRoute =require('./routes/product.route.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);


app.get('/',(rq,res) => {
  res.send("hello from node api");
});


mongoose.connect("mongodb+srv://22051058:XtcW3bBMcd6Keanx@backenddb.eu1oczz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb")
.then(() => {
  console.log("connected to databse!");
  app.listen(3000,() => {
    console.log("started");
  });
})
.catch(() => {
  console.log("connection failed!")
})
