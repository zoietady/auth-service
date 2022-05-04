if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
// const cors = require('cors');

const data = require("./data.js");

app.use(express.json());
app.use(cookieParser());

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', true);

    res.send(200);
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


const authRouter = require('./routes/authRoute');

app.get("/", (req,res)=>{
    res.send("root of auth service");
});

app.use('/auth',authRouter);



app.listen(process.env.PORT || 3000, () => console.log(`server started`));
