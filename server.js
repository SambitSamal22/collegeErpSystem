const express=require('express');

const path=require('path');

const app=express();

const PublicPath=path.join(__dirname,'Public');

app.use(express.static(PublicPath));

console.warn('nodemon');


app.listen(3000);