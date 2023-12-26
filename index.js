
const express = require('express');
 const app = express()
 const expressLayout = require('express-ejs-layouts');
 const PORT = process.env.PORT || 3000;
const connectDB = require('./config/connectdb')


app.use(express.urlencoded({extended : true}))
app.use(express.static());
app.use(express.json());


app.set('view engine', 'ejs');
app.use(expressLayout)
app.set('layout', './layout/main');

connectDB()


app.listen(PORT, ()=>console.log(`server running on port ${PORT}`));
