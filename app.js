const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/local';

const app = express();

mongoose.connect(url,{useNewUrlParser:true});

const con = mongoose.connection;
con.on('open',function(){
    console.log("connected....");
});

app.use(express.json());
const middleRouter = require('./routers/router');
app.use('/data',middleRouter);

app.listen(9000,()=>{
    console.log("server started:...");
});
