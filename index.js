const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());


const categories = require('./data/category.json');

app.get('/', (req,res)=>{
    res.send("welcome to server site");
})

app.get('/catetories', (req,res)=>{
    res.send(categories);
})


app.listen(port, ()=>{
    console.log("port is running in :" ,port);
})



module.exports = app;
