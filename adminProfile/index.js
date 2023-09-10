const express = require('express');
const mongoose = require('mongoose');
const roleRoutes = require('./routes/roleRoutes');

const app = express();

mongoose.connect('mongodb+srv://manishsah:ZVF30CtxCr65RcKs@towner.ussg50q.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((result)=> app.listen(3000))
.catch((err) => console.log(err));


app.use(roleRoutes);